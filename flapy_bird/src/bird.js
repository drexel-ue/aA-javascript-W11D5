export default class Bird {
    constructor(dimensions) {
        this.velocity = 0;
        this.height = dimensions.height;
        this.width = dimensions.width;
        this.yPos = width / 2;
        this.xPos = width / 3;
    }

    drawbird(context) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(0, 0, 40, 30);
    }

    animate(context) {
        this.drawbird(context);
    }
}