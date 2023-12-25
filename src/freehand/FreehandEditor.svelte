<script type="ts">
  import {boundsFromPoints, Handle, Editor } from '@annotorious/annotorious/src';
  import type { Freehand, Transform } from '@annotorious/annotorious';
  import { getStroke } from 'perfect-freehand';
  /** Props */

  function getSvgPathFromStroke(stroke) {
    if (!stroke.length) return ""
  
    const d = stroke.reduce(
      (acc, [x0, y0], i, arr) => {
        const [x1, y1] = arr[(i + 1) % arr.length]
        acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2)
        return acc
      },
      ["M", ...stroke[0], "Q"]
    )
  
    d.push("Z")
    return d.join(" ")
  }

  const options = {
      size: 12,
      thinning: 0.5,
      smoothing: 0.5,
      streamline: 0.5,
      easing: (t) => t,
      start: {
        taper: 0,
        easing: (t) => t,
        cap: true,
      },
      end: {
        taper: 0,
        easing: (t) => t,
        cap: true,
      },
    };

  export let shape: Polygon;
  export let computedStyle: string = undefined;
  export let transform: Transform;
  export let viewportScale: number = 1;

  $: geom = shape.geometry;
  $: stroke = getStroke(geom.points, options);
  $: pathData = getSvgPathFromStroke(stroke);
  $: handleSize = 10 / viewportScale;

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
