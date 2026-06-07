var wms_layers = [];


        var lyr_EsriStreet_0 = new ol.layer.Tile({
            'title': 'Esri Street',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_StudyArea_PointVillages3Projected_1 = new ol.format.GeoJSON();
var features_StudyArea_PointVillages3Projected_1 = format_StudyArea_PointVillages3Projected_1.readFeatures(json_StudyArea_PointVillages3Projected_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StudyArea_PointVillages3Projected_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StudyArea_PointVillages3Projected_1.addFeatures(features_StudyArea_PointVillages3Projected_1);
var lyr_StudyArea_PointVillages3Projected_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StudyArea_PointVillages3Projected_1, 
                style: style_StudyArea_PointVillages3Projected_1,
                popuplayertitle: 'StudyArea_Point&Villages3-Projected',
                interactive: true,
                title: '<img src="styles/legend/StudyArea_PointVillages3Projected_1.png" /> StudyArea_Point&Villages3-Projected'
            });

lyr_EsriStreet_0.setVisible(true);lyr_StudyArea_PointVillages3Projected_1.setVisible(true);
var layersList = [lyr_EsriStreet_0,lyr_StudyArea_PointVillages3Projected_1];
lyr_StudyArea_PointVillages3Projected_1.set('fieldAliases', {'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'JOIN_FID': 'JOIN_FID', 'X': 'X', 'Y': 'Y', 'Type_of_Co': 'Type_of_Co', 'Joint_Code': 'Joint_Code', 'Date': 'Date', 'Year': 'Year', 'M_Kiti_Kij': 'M_Kiti_Kij', 'TAREHE': 'TAREHE', 'OBJECTID': 'OBJECTID', 'Region_Cod': 'Region_Cod', 'Region_Nam': 'Region_Nam', 'District_C': 'District_C', 'District_N': 'District_N', 'Ward_Code': 'Ward_Code', 'Ward_Name': 'Ward_Name', 'Vil_Mtaa_N': 'Vil_Mtaa_N', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Village_Co': 'Village_Co', 'Pop_densit': 'Pop_densit', 'Rinfall': 'Rinfall', 'Rainfall': 'Rainfall', 'Temperatur': 'Temperatur', 'Popl_Denst': 'Popl_Denst', 'Recla24AG': 'Recla24AG', 'RoadS': 'RoadS', 'SerengetiB': 'SerengetiB', 'Settlement': 'Settlement', 'Riverwater': 'Riverwater', 'LULC': 'LULC', 'ReclLULC': 'ReclLULC', });
lyr_StudyArea_PointVillages3Projected_1.set('fieldImages', {'Join_Count': '', 'TARGET_FID': '', 'JOIN_FID': '', 'X': '', 'Y': '', 'Type_of_Co': '', 'Joint_Code': '', 'Date': '', 'Year': '', 'M_Kiti_Kij': '', 'TAREHE': '', 'OBJECTID': '', 'Region_Cod': '', 'Region_Nam': '', 'District_C': '', 'District_N': '', 'Ward_Code': '', 'Ward_Name': '', 'Vil_Mtaa_N': '', 'Shape_Leng': '', 'Shape_Area': '', 'Village_Co': '', 'Pop_densit': '', 'Rinfall': '', 'Rainfall': '', 'Temperatur': '', 'Popl_Denst': '', 'Recla24AG': '', 'RoadS': '', 'SerengetiB': '', 'Settlement': '', 'Riverwater': '', 'LULC': '', 'ReclLULC': '', });
lyr_StudyArea_PointVillages3Projected_1.set('fieldLabels', {'Join_Count': 'inline label - always visible', 'TARGET_FID': 'inline label - always visible', 'JOIN_FID': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Type_of_Co': 'inline label - always visible', 'Joint_Code': 'inline label - always visible', 'Date': 'inline label - always visible', 'Year': 'inline label - always visible', 'M_Kiti_Kij': 'inline label - always visible', 'TAREHE': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'Region_Cod': 'header label - always visible', 'Region_Nam': 'no label', 'District_C': 'no label', 'District_N': 'no label', 'Ward_Code': 'no label', 'Ward_Name': 'no label', 'Vil_Mtaa_N': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Village_Co': 'no label', 'Pop_densit': 'no label', 'Rinfall': 'no label', 'Rainfall': 'no label', 'Temperatur': 'no label', 'Popl_Denst': 'no label', 'Recla24AG': 'no label', 'RoadS': 'no label', 'SerengetiB': 'no label', 'Settlement': 'no label', 'Riverwater': 'no label', 'LULC': 'no label', 'ReclLULC': 'no label', });
lyr_StudyArea_PointVillages3Projected_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});