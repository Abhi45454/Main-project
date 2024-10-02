const familyData = [
    {
        name: "Grandfather",
        children: [
            {
                name: "Father",
                children: [
                    { name: "Me" },
                    { name: "Sister" }
                ]
            },
            {
                name: "Uncle",
                children: [
                    { name: "Cousin" }
                ]
            }
        ]
    },
    {
        name: "Grandmother",
        children: [
            {
                name: "Aunt",
                children: [
                    { name: "Cousin" }
                ]
            }
        ]
    }
];

function createNode(node) {
    const div = document.createElement('div');
    div.className = 'node';
    div.innerText = node.name;

    return div;
}

function createTree(parent, data) {
    const children = data.children || [];
    const node = createNode(data);

    if (children.length > 0) {
        const line = document.createElement('div');
        line.className = 'line';

        children.forEach(child => {
            const childNode = createTree(node, child);
            line.appendChild(childNode);
        });

        node.appendChild(line);
    }

    parent.appendChild(node);
    return node;
}

const treeContainer = document.getElementById('tree');
familyData.forEach(ancestor => {
    createTree(treeContainer, ancestor);
});
