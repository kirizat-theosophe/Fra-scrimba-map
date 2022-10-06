


const pt = turf.point([-77, 54]);

const poly = turf.polygon([[
    [-81, 41],
    [-81, 47],
    [-72, 47],
    [-72, 41],
    [-81, 41]
]]);

const erPunktetInni = turf.booleanPointInPolygon(pt, poly);

console.log(erPunktetInni);