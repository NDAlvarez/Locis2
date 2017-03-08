var size = 0;
function categories_Concellos_parroquias_puntos1(feature, value) {
                switch(value) {case 'Cambados':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(58,160,207,1.0)'})
    })];
                    break;
case 'Meis':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(193,151,91,1.0)'})
    })];
                    break;
case 'Vilanova de Arousa':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,127,0,1.0)'})
    })];
                    break;}};
var styleCache_Concellos_parroquias_puntos1={}
var style_Concellos_parroquias_puntos1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Concello");
    var style = categories_Concellos_parroquias_puntos1(feature, value);
    if (feature.get("Parroquia") !== null) {
        var labelText = String(feature.get("Parroquia"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Concellos_parroquias_puntos1[key]){
        var text = new ol.style.Text({
              font: '5.525px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
              stroke: new ol.style.Stroke({
                color: "#ffffff",
                width: 1
              }),
            });
        styleCache_Concellos_parroquias_puntos1[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Concellos_parroquias_puntos1[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};