import "./lib/canvas-extensions.js";

import { circle, withAttribs, asPolygon } from "@thi.ng/geom";

import { draw } from "@thi.ng/hiccup-canvas";

console.log(asPolygon(circle(100), 40));

class Sketch {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
    }

    render(state) {
        const { backgroundColor, imageScale, image } = state;

        const ctx = this.ctx;
        ctx.clear(backgroundColor);

        let circ = circle(300);
        console.log(circ);
        circ = withAttribs(circ, { fill: "#000" });
        console.log(circ);

        // const width = ctx.canvas.width;
        // const height = ctx.canvas.height;

        // ctx.fillStyle = backgroundColor;
        // ctx.fillRect(0, 0, width, height);

        // ctx.save();
        // ctx.translate((width - width * imageScale) / 2, (height - height * imageScale) / 2);
        // ctx.scale(imageScale, imageScale);
        // ctx.drawImage(image, 0, 0, width, height);
        // ctx.restore();

        draw(ctx, circ);
    }
}

export default Sketch;
