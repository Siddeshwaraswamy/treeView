
var treeNode, dataObj, treeNodeObj;

dataObj = {
    "folder-1": {
        "label": "first-folder",
        "type": "treeView",
        "children": [
            {
                label: "A",
                type: "treeView",
                children: [
                    {label: "C"}
                ]
            },
            {
                label : "B"
            }
        ]
    },
    "folder-2": {
        "label": "second-folder",
        "type": "treeView",
        "children": [
            {
                label: "1",
                type: "treeView",
                children: [
                    {label: "3"}
                ]
            },
            {
                label : "2"
            }
        ]
    }
};

treeNode = new tree($('.treeContainer .tree'), dataObj);
treeNodeObj = treeNode.getTree();

