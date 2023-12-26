import { ShapeType, type ImageAnnotator } from '@annotorious/annotorious';
import { EllipseEditor, RubberbandEllipse } from './ellipse';
// import { FreehandEditor, RubberbandFreehand } from './ellipse';

export const mountExtension = (
  anno: ImageAnnotator
) => {

  anno.registerDrawingTool('ellipse', RubberbandEllipse);
  anno.registerShapeEditor(ShapeType.ELLIPSE, EllipseEditor);
  // anno.registerDrawingTool('freehand', RubberbandFreehand);
  // anno.registerShapeEditor('FREEHAND', FreehandEditor);

}
