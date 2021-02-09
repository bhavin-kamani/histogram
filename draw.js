const svgNS = "http://www.w3.org/2000/svg";

function drawLine(svg, {x1 = 0, y1 = 0, x2 = 0, y2 = 0, stroke = 'black', strokeWidth = 1, strokeType = 'solid'}) {
    const element = document.createElementNS(svgNS, 'line');
    element.setAttributeNS(null, 'x1', x1.toString());
    element.setAttributeNS(null, 'y1', y1.toString());
    element.setAttributeNS(null, 'x2', x2.toString());
    element.setAttributeNS(null, 'y2', y2.toString());
    element.setAttributeNS(null, 'stroke', stroke.toString());
    element.setAttributeNS(null, 'stroke-width', strokeWidth.toString());
    element.setAttributeNS(null, 'shape-rendering', 'crispEdges');

    if (strokeType === 'dashed') {
        element.setAttributeNS(null, 'stroke-dasharray', '4');
    }

    svg.appendChild(element);
}

function drawCircle(svg, {cx = 0, cy = 0, r = 0, fill = 'black', id = null}) {
    let element = id ? document.getElementById(id) : null;

    if (!element) {
        element = document.createElementNS(svgNS, 'circle');
    }

    if (id) {
        element.setAttributeNS(null, 'id', id);
    }

    element.setAttributeNS(null, 'cx', cx.toString());
    element.setAttributeNS(null, 'cy', cy.toString());
    element.setAttributeNS(null, 'r', r.toString());
    element.setAttributeNS(null, 'fill', fill);
    element.setAttributeNS(null, 'stroke', "none");

    svg.appendChild(element);
}

function drawRectangle(svg, {x = 0, y = 0, width = 0, height = 0, fill = 'black'}) {
    const element = document.createElementNS(svgNS, 'rect');
    element.setAttributeNS(null, 'x', x.toString());
    element.setAttributeNS(null, 'y', y.toString());
    element.setAttributeNS(null, 'width', width.toString());
    element.setAttributeNS(null, 'height', height.toString());
    element.setAttributeNS(null, 'fill', fill);

    svg.appendChild(element);
}

function drawTriangle(svg, {x1 = 0, y1 = 0, x2 = 0, y2 = 0, x3 = 0, y3 = 0, fill = 'black'}) {
    const element = document.createElementNS(svgNS, 'polygon');
    element.setAttributeNS(null, 'points', `${x1},${y1} ${x2},${y2} ${x3},${y3}`);
    element.setAttributeNS(null, 'fill', fill);

    svg.appendChild(element);
}

function drawText(svg, {x = 0, y = 0, text = ''}) {
    const element = document.createElementNS(svgNS, 'text');
    element.setAttributeNS(null, 'x', x.toString());
    element.setAttributeNS(null, 'y', y.toString());
    element.setAttributeNS(null, 'class', 'svg-text');
    element.textContent = text;

    svg.appendChild(element);
}

function drawExample(svg) {
    for (let i = 1; i <= 12; i += 1) {
        // grid lines
        drawLine(svg, {x1: 40 + 30 * i, y1: 20, x2: 40 + 30 * i, y2: 380, stroke: '#ccc'});
        drawLine(svg, {x1: 40, y1: 20 + 30 * (i - 1), x2: 400, y2: 20 + 30 * (i - 1), stroke: '#ccc'});

        // axis ticks
        drawLine(svg, {x1: 40 + 30 * i, y1: 380, x2: 40 + 30 * i, y2: 384});
        drawLine(svg, {x1: 36, y1: 20 + 30 * (i - 1), x2: 40, y2: 20 + 30 * (i - 1)});

        // axis labels
        drawText(svg, {x: 35 + 30 * i, y: 400, text: i});
        drawText(svg, {x: 20, y: 25 + 30 * (i - 1), text: 12 - i + 1});
    }

    drawText(svg, {x: 35, y: 400, text: 0});

    // x-axis
    drawLine(svg, {x1: 40, y1: 380, x2: 400, y2: 380});
    // y-axis
    drawLine(svg, {x1: 40, y1: 20, x2: 40, y2: 380});

    drawRectangle(svg, {
        x: 70,
        y: 200,
        width: 30,
        height: 180,
        fill: 'blue',
    });

    drawLine(svg, {
        x1: 40,
        y1: 160,
        x2: 400,
        y2: 160,
        stroke: 'green',
        strokeWidth: 2,
    });

    drawCircle(svg, {cx: 160, cy: 400 - 300, r: 20, fill: 'green'});
    drawTriangle(svg, {x1: 100, y1: 100, x2: 100, y2: 120, x3: 120, y3: 110, fill: 'red'});
}