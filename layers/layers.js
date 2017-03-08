var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var lyr_MDT_Unidos0 = new ol.layer.Image({
                            opacity: 1,
                            title: "MDT_Unidos",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MDT_Unidos0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [2105, 1266],
                                imageExtent: [-1050935.687149, 5108277.007201, -469844.639427, 5438888.042692]
                            })
                        });var format_Concellos_parroquias_puntos1 = new ol.format.GeoJSON();
var features_Concellos_parroquias_puntos1 = format_Concellos_parroquias_puntos1.readFeatures(geojson_Concellos_parroquias_puntos1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Concellos_parroquias_puntos1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Concellos_parroquias_puntos1.addFeatures(features_Concellos_parroquias_puntos1);var lyr_Concellos_parroquias_puntos1 = new ol.layer.Vector({
                source:jsonSource_Concellos_parroquias_puntos1, 
                style: style_Concellos_parroquias_puntos1,
                title: "Concellos_parroquias_puntos"
            });

lyr_MDT_Unidos0.setVisible(true);lyr_Concellos_parroquias_puntos1.setVisible(true);
var layersList = [baseLayer,lyr_MDT_Unidos0,lyr_Concellos_parroquias_puntos1];
lyr_Concellos_parroquias_puntos1.set('fieldAliases', {'NomeConcel': 'NomeConcel', 'CodCONC': 'CodCONC', 'Concello': 'Concello', 'CodCOM': 'CodCOM', 'CodPROV': 'CodPROV', 'NomeCapita': 'NomeCapita', 'Comarca': 'Comarca', 'Provincia': 'Provincia', 'CODIGOINE': 'CODIGOINE', 'NomeMAY': 'NomeMAY', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Anotacion': 'Anotacion', 'codcom_2': 'codcom_2', 'codconc_2': 'codconc_2', 'CodPARRO': 'CodPARRO', 'codprov_2': 'codprov_2', 'comarca_2': 'comarca_2', 'concello_2': 'concello_2', 'DataModifi': 'DataModifi', 'nomeconc_1': 'nomeconc_1', 'Parroquia': 'Parroquia', 'provincia_': 'provincia_', 'shape_le_1': 'shape_le_1', 'shape_ar_1': 'shape_ar_1', });
lyr_Concellos_parroquias_puntos1.set('fieldImages', {'NomeConcel': 'TextEdit', 'CodCONC': 'TextEdit', 'Concello': 'TextEdit', 'CodCOM': 'TextEdit', 'CodPROV': 'TextEdit', 'NomeCapita': 'TextEdit', 'Comarca': 'TextEdit', 'Provincia': 'TextEdit', 'CODIGOINE': 'TextEdit', 'NomeMAY': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Anotacion': 'TextEdit', 'codcom_2': 'TextEdit', 'codconc_2': 'TextEdit', 'CodPARRO': 'TextEdit', 'codprov_2': 'TextEdit', 'comarca_2': 'TextEdit', 'concello_2': 'TextEdit', 'DataModifi': 'TextEdit', 'nomeconc_1': 'TextEdit', 'Parroquia': 'TextEdit', 'provincia_': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_ar_1': 'TextEdit', });
lyr_Concellos_parroquias_puntos1.set('fieldLabels', {'NomeConcel': 'no label', 'CodCONC': 'no label', 'Concello': 'no label', 'CodCOM': 'no label', 'CodPROV': 'no label', 'NomeCapita': 'no label', 'Comarca': 'no label', 'Provincia': 'no label', 'CODIGOINE': 'no label', 'NomeMAY': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Anotacion': 'no label', 'codcom_2': 'no label', 'codconc_2': 'no label', 'CodPARRO': 'no label', 'codprov_2': 'no label', 'comarca_2': 'no label', 'concello_2': 'no label', 'DataModifi': 'no label', 'nomeconc_1': 'no label', 'Parroquia': 'no label', 'provincia_': 'no label', 'shape_le_1': 'no label', 'shape_ar_1': 'no label', });
lyr_Concellos_parroquias_puntos1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});