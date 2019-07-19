for (let i = 0; i < this.pathLab.length; i++) {
  line = new three3DExtras.tubeLine(
    [
      this.referencePoint.x + this.pathLab[i][0][1],
      this.referencePoint.y + this.pathLab[i][0][0],
      this.VAL_Z
    ],
    [
      this.referencePoint.x + this.pathLab[i][1][1],
      this.referencePoint.y + this.pathLab[i][1][0],
      this.VAL_Z
    ],
    pathWidth,
    pathColor
  );
  scene.add(line.getObject3D());
}



