
var tree;

tree = function (treeNodeParent, dataObj) {
    this.dataObj = dataObj;
    this.treeNodeParent = treeNodeParent;
    this.treeNode = $(document.createElement("<ul class='treeNode'></ul>"));
};

tree.prototype.expandCollapse = function (e) {
    var target = $(e.currentTarget), parentLabel = target.parent();

    if (parentLabel.hasClass("collapsed")) {
        parentLabel.removeClass("collapsed").addClass("expanded");
    } else {
        parentLabel.addClass("collapsed").removeClass("expanded");
    }
};

tree.prototype.attachEvents = function () {
    var me = this;
    me.treeNodeParent.delegate(".collapsed label, .expanded label", "click", me.expandCollapse);
};

tree.prototype.attachMarkUp = function () {
    var me = this;
    me.treeNodeParent.append(me.treeNode);
};

tree.prototype.getEachNodeMarkup = function (nodeObj, rootNode, selector) {
    var selectedNode, i, me = this;

    if (nodeObj.children) {

        if (!selector) {
            selectedNode = rootNode;
        } else {
            selectedNode = rootNode.find(selector);
        }

        selectedNode.append(document.createElement("<li name=" + nodeObj.label + " class='collapsed'>" + "<label>" + nodeObj.label + "</label>" + "<ul></ul></li>"));

        selector = selector + " li[name=" + nodeObj.label + "] ul";

        for (i = 0; i < nodeObj.children.length; i = i + 1) {
            me.getEachNodeMarkup(nodeObj.children[i], rootNode, selector);
        }

    } else {
        rootNode.find(selector).append(document.createElement("<li name=" + nodeObj.label + ">" + "<label>" + nodeObj.label + "</label>" + "</li>"));
    }
};

tree.prototype.getTree = function () {
    var component, me = this;

    for (component in me.dataObj) {
        if (me.dataObj.hasOwnProperty(component)) {
            me.getEachNodeMarkup(me.dataObj[component], me.treeNode, "");
        }
    }
    me.attachMarkUp();
    me.attachEvents();
    return me.treeNode;
};