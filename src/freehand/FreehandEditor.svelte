<script type="ts">
  import {boundsFromPoints, Handle, Editor } from '@annotorious/annotorious/src';
  import type { Freehand, Transform } from '@annotorious/annotorious';
  

  const editor = (polygon: Polygon, handle: Handle, delta: [number, number]) => {
    let points: [number, number][];

    if (handle === Handle.SHAPE) {
      points = polygon.geometry.points.map(([x, y]) => [x + delta[0], y + delta[1]]);
    } else {
      points = polygon.geometry.points.map(([x, y], idx) =>
        handle === Handle(idx) ? [x + delta[0], y + delta[1]] : [x, y]
      );
    }

    const bounds = boundsFromPoints(points);

    return {
      ...polygon,
      geometry: { points, bounds }
    }
  }
</script>

<Editor
  shape={shape}
  transform={transform}
  editor={editor}
  on:change 
  on:grab
  on:release
  let:grab={grab}>

  {#if geom.points.length}
    <path
      class="a9s-outer"
      style={computedStyle}
      on:pointerdown={grab(Handle.SHAPE)}
      d = {pathData}
      />
  {/if}
</Editor>
