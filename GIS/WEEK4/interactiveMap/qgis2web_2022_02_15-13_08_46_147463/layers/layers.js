var wms_layers = [];


        var lyr_Bingmaps_0 = new ol.layer.Tile({
            'title': 'Bing maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.dynamic.t0.tiles.virtualearth.net/comp/CompositionHandler/{q}?mkt=en-us&it=G,VE,BX,L,LA&shading=hill'
            })
        });
var format_states_1 = new ol.format.GeoJSON();
var features_states_1 = format_states_1.readFeatures(json_states_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_states_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_states_1.addFeatures(features_states_1);
var lyr_states_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_states_1, 
                style: style_states_1,
                interactive: true,
                title: '<img src="styles/legend/states_1.png" /> states'
            });
var format_iowa_border_2 = new ol.format.GeoJSON();
var features_iowa_border_2 = format_iowa_border_2.readFeatures(json_iowa_border_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_iowa_border_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_iowa_border_2.addFeatures(features_iowa_border_2);
var lyr_iowa_border_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_iowa_border_2, 
                style: style_iowa_border_2,
                interactive: true,
                title: '<img src="styles/legend/iowa_border_2.png" /> iowa_border'
            });
var format_highway_3 = new ol.format.GeoJSON();
var features_highway_3 = format_highway_3.readFeatures(json_highway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_3.addFeatures(features_highway_3);
var lyr_highway_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_3, 
                style: style_highway_3,
                interactive: true,
                title: '<img src="styles/legend/highway_3.png" /> highway'
            });
var format_cities_4 = new ol.format.GeoJSON();
var features_cities_4 = format_cities_4.readFeatures(json_cities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cities_4.addFeatures(features_cities_4);
var lyr_cities_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cities_4, 
                style: style_cities_4,
                interactive: true,
                title: '<img src="styles/legend/cities_4.png" /> cities'
            });
var format_Water_Treatment_Plant_Facilities_5 = new ol.format.GeoJSON();
var features_Water_Treatment_Plant_Facilities_5 = format_Water_Treatment_Plant_Facilities_5.readFeatures(json_Water_Treatment_Plant_Facilities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Water_Treatment_Plant_Facilities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_Treatment_Plant_Facilities_5.addFeatures(features_Water_Treatment_Plant_Facilities_5);
var lyr_Water_Treatment_Plant_Facilities_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Water_Treatment_Plant_Facilities_5, 
                style: style_Water_Treatment_Plant_Facilities_5,
                interactive: true,
                title: '<img src="styles/legend/Water_Treatment_Plant_Facilities_5.png" /> Water_Treatment_Plant_Facilities'
            });

lyr_Bingmaps_0.setVisible(true);lyr_states_1.setVisible(true);lyr_iowa_border_2.setVisible(true);lyr_highway_3.setVisible(true);lyr_cities_4.setVisible(true);lyr_Water_Treatment_Plant_Facilities_5.setVisible(true);
var layersList = [lyr_Bingmaps_0,lyr_states_1,lyr_iowa_border_2,lyr_highway_3,lyr_cities_4,lyr_Water_Treatment_Plant_Facilities_5];
lyr_states_1.set('fieldAliases', {'AREA': 'AREA', 'STATE_NAME': 'STATE_NAME', 'STATE_FIPS': 'STATE_FIPS', 'SUB_REGION': 'SUB_REGION', 'STATE_ABBR': 'STATE_ABBR', 'POP2000': 'POP2000', 'POP2001': 'POP2001', 'POP00_SQMI': 'POP00_SQMI', 'WHITE': 'WHITE', 'BLACK': 'BLACK', 'AMERI_ES': 'AMERI_ES', 'ASIAN': 'ASIAN', 'HAWN_PI': 'HAWN_PI', 'OTHER': 'OTHER', 'MULT_RACE': 'MULT_RACE', 'HISPANIC': 'HISPANIC', 'MALES': 'MALES', 'FEMALES': 'FEMALES', 'AGE_UNDER5': 'AGE_UNDER5', 'AGE_5_17': 'AGE_5_17', 'AGE_18_21': 'AGE_18_21', 'AGE_22_29': 'AGE_22_29', 'AGE_30_39': 'AGE_30_39', 'AGE_40_49': 'AGE_40_49', 'AGE_50_64': 'AGE_50_64', 'AGE_65_UP': 'AGE_65_UP', 'MED_AGE': 'MED_AGE', 'MED_AGE_M': 'MED_AGE_M', 'MED_AGE_F': 'MED_AGE_F', 'HOUSEHOLDS': 'HOUSEHOLDS', 'AVE_HH_SZ': 'AVE_HH_SZ', 'HSEHLD_1_M': 'HSEHLD_1_M', 'HSEHLD_1_F': 'HSEHLD_1_F', 'MARHH_CHD': 'MARHH_CHD', 'MARHH_NO_C': 'MARHH_NO_C', 'MHH_CHILD': 'MHH_CHILD', 'FHH_CHILD': 'FHH_CHILD', 'FAMILIES': 'FAMILIES', 'AVE_FAM_SZ': 'AVE_FAM_SZ', 'HSE_UNITS': 'HSE_UNITS', 'VACANT': 'VACANT', 'OWNER_OCC': 'OWNER_OCC', 'RENTER_OCC': 'RENTER_OCC', 'NO_FARMS97': 'NO_FARMS97', 'AVG_SIZE97': 'AVG_SIZE97', 'CROP_ACR97': 'CROP_ACR97', 'AVG_SALE97': 'AVG_SALE97', });
lyr_iowa_border_2.set('fieldAliases', {'Id': 'Id', });
lyr_highway_3.set('fieldAliases', {'LENGTH': 'LENGTH', 'US1': 'US1', 'US2': 'US2', 'ST1': 'ST1', 'ST2': 'ST2', 'INT1': 'INT1', 'INT2': 'INT2', 'TYPE': 'TYPE', 'CO_NUMBER': 'CO_NUMBER', 'CO_NAME': 'CO_NAME', 'LABEL_TYPE': 'LABEL_TYPE', 'LABEL': 'LABEL', });
lyr_cities_4.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PL19_D00_': 'PL19_D00_', 'PL19_D00_I': 'PL19_D00_I', 'STATE': 'STATE', 'PLC': 'PLC', 'PLACEFP': 'PLACEFP', 'NAME': 'NAME', 'LSAD': 'LSAD', 'LSAD_TRANS': 'LSAD_TRANS', 'FIPSNUMBER': 'FIPSNUMBER', 'FIPSSTRING': 'FIPSSTRING', 'NAMECAP': 'NAMECAP', });
lyr_Water_Treatment_Plant_Facilities_5.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'OBJECTID': 'OBJECTID', 'MAPLABELNA': 'MAPLABELNA', 'LEGENDTYPE': 'LEGENDTYPE', 'PUBLICVIEW': 'PUBLICVIEW', 'LOCID': 'LOCID', 'stfacid': 'stfacid', 'progid': 'progid', 'facName': 'facName', 'opStatus': 'opStatus', 'piStartDate': 'piStartDate', 'PWSSource': 'PWSSource', 'PWSType': 'PWSType', 'SubName': 'SubName', 'SubProgID': 'SubProgID', 'countyName': 'countyName', 'FO': 'FO', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'X_Coord': 'X_Coord', 'Y_Coord': 'Y_Coord', 'Accuracy': 'Accuracy', 'colMthTxt': 'colMthTxt', 'refPntTxt': 'refPntTxt', 'VerifyTxt': 'VerifyTxt', 'collectBy': 'collectBy', 'ColDate': 'ColDate', 'locComment': 'locComment', 'Congress': 'Congress', 'StHouse': 'StHouse', 'StSenate': 'StSenate', 'HUC': 'HUC', 'Hyperlink': 'Hyperlink', });
lyr_states_1.set('fieldImages', {'AREA': 'TextEdit', 'STATE_NAME': 'TextEdit', 'STATE_FIPS': 'TextEdit', 'SUB_REGION': 'TextEdit', 'STATE_ABBR': 'TextEdit', 'POP2000': 'Range', 'POP2001': 'TextEdit', 'POP00_SQMI': 'Range', 'WHITE': 'Range', 'BLACK': 'Range', 'AMERI_ES': 'Range', 'ASIAN': 'Range', 'HAWN_PI': 'Range', 'OTHER': 'Range', 'MULT_RACE': 'Range', 'HISPANIC': 'Range', 'MALES': 'Range', 'FEMALES': 'Range', 'AGE_UNDER5': 'Range', 'AGE_5_17': 'Range', 'AGE_18_21': 'Range', 'AGE_22_29': 'Range', 'AGE_30_39': 'Range', 'AGE_40_49': 'Range', 'AGE_50_64': 'Range', 'AGE_65_UP': 'Range', 'MED_AGE': 'TextEdit', 'MED_AGE_M': 'TextEdit', 'MED_AGE_F': 'TextEdit', 'HOUSEHOLDS': 'Range', 'AVE_HH_SZ': 'TextEdit', 'HSEHLD_1_M': 'Range', 'HSEHLD_1_F': 'Range', 'MARHH_CHD': 'Range', 'MARHH_NO_C': 'Range', 'MHH_CHILD': 'Range', 'FHH_CHILD': 'Range', 'FAMILIES': 'Range', 'AVE_FAM_SZ': 'TextEdit', 'HSE_UNITS': 'Range', 'VACANT': 'Range', 'OWNER_OCC': 'Range', 'RENTER_OCC': 'Range', 'NO_FARMS97': 'TextEdit', 'AVG_SIZE97': 'TextEdit', 'CROP_ACR97': 'TextEdit', 'AVG_SALE97': 'TextEdit', });
lyr_iowa_border_2.set('fieldImages', {'Id': 'Range', });
lyr_highway_3.set('fieldImages', {'LENGTH': 'TextEdit', 'US1': 'Range', 'US2': 'Range', 'ST1': 'Range', 'ST2': 'Range', 'INT1': 'Range', 'INT2': 'Range', 'TYPE': 'Range', 'CO_NUMBER': 'Range', 'CO_NAME': 'TextEdit', 'LABEL_TYPE': 'TextEdit', 'LABEL': 'TextEdit', });
lyr_cities_4.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'PL19_D00_': 'TextEdit', 'PL19_D00_I': 'TextEdit', 'STATE': 'TextEdit', 'PLC': 'TextEdit', 'PLACEFP': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'LSAD_TRANS': 'TextEdit', 'FIPSNUMBER': 'Range', 'FIPSSTRING': 'TextEdit', 'NAMECAP': 'TextEdit', });
lyr_Water_Treatment_Plant_Facilities_5.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'OBJECTID': 'Range', 'MAPLABELNA': 'TextEdit', 'LEGENDTYPE': 'Range', 'PUBLICVIEW': 'Range', 'LOCID': 'TextEdit', 'stfacid': 'Range', 'progid': 'TextEdit', 'facName': 'TextEdit', 'opStatus': 'TextEdit', 'piStartDate': 'DateTime', 'PWSSource': 'TextEdit', 'PWSType': 'TextEdit', 'SubName': 'TextEdit', 'SubProgID': 'Range', 'countyName': 'TextEdit', 'FO': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'X_Coord': 'Range', 'Y_Coord': 'Range', 'Accuracy': 'Range', 'colMthTxt': 'TextEdit', 'refPntTxt': 'TextEdit', 'VerifyTxt': 'TextEdit', 'collectBy': 'TextEdit', 'ColDate': 'DateTime', 'locComment': 'TextEdit', 'Congress': 'TextEdit', 'StHouse': 'Range', 'StSenate': 'Range', 'HUC': 'TextEdit', 'Hyperlink': 'TextEdit', });
lyr_states_1.set('fieldLabels', {'AREA': 'no label', 'STATE_NAME': 'no label', 'STATE_FIPS': 'header label', 'SUB_REGION': 'no label', 'STATE_ABBR': 'no label', 'POP2000': 'no label', 'POP2001': 'no label', 'POP00_SQMI': 'no label', 'WHITE': 'no label', 'BLACK': 'no label', 'AMERI_ES': 'no label', 'ASIAN': 'no label', 'HAWN_PI': 'no label', 'OTHER': 'no label', 'MULT_RACE': 'no label', 'HISPANIC': 'no label', 'MALES': 'no label', 'FEMALES': 'no label', 'AGE_UNDER5': 'no label', 'AGE_5_17': 'no label', 'AGE_18_21': 'no label', 'AGE_22_29': 'no label', 'AGE_30_39': 'no label', 'AGE_40_49': 'no label', 'AGE_50_64': 'no label', 'AGE_65_UP': 'no label', 'MED_AGE': 'no label', 'MED_AGE_M': 'no label', 'MED_AGE_F': 'no label', 'HOUSEHOLDS': 'no label', 'AVE_HH_SZ': 'no label', 'HSEHLD_1_M': 'no label', 'HSEHLD_1_F': 'no label', 'MARHH_CHD': 'no label', 'MARHH_NO_C': 'no label', 'MHH_CHILD': 'no label', 'FHH_CHILD': 'no label', 'FAMILIES': 'no label', 'AVE_FAM_SZ': 'no label', 'HSE_UNITS': 'no label', 'VACANT': 'no label', 'OWNER_OCC': 'no label', 'RENTER_OCC': 'no label', 'NO_FARMS97': 'no label', 'AVG_SIZE97': 'no label', 'CROP_ACR97': 'no label', 'AVG_SALE97': 'no label', });
lyr_iowa_border_2.set('fieldLabels', {'Id': 'no label', });
lyr_highway_3.set('fieldLabels', {'LENGTH': 'no label', 'US1': 'no label', 'US2': 'no label', 'ST1': 'no label', 'ST2': 'header label', 'INT1': 'no label', 'INT2': 'inline label', 'TYPE': 'inline label', 'CO_NUMBER': 'inline label', 'CO_NAME': 'no label', 'LABEL_TYPE': 'no label', 'LABEL': 'no label', });
lyr_cities_4.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'PL19_D00_': 'no label', 'PL19_D00_I': 'no label', 'STATE': 'no label', 'PLC': 'no label', 'PLACEFP': 'no label', 'NAME': 'header label', 'LSAD': 'no label', 'LSAD_TRANS': 'no label', 'FIPSNUMBER': 'no label', 'FIPSSTRING': 'no label', 'NAMECAP': 'no label', });
lyr_Water_Treatment_Plant_Facilities_5.set('fieldLabels', {'X': 'no label', 'Y': 'no label', 'OBJECTID': 'no label', 'MAPLABELNA': 'no label', 'LEGENDTYPE': 'no label', 'PUBLICVIEW': 'no label', 'LOCID': 'no label', 'stfacid': 'no label', 'progid': 'no label', 'facName': 'no label', 'opStatus': 'no label', 'piStartDate': 'no label', 'PWSSource': 'no label', 'PWSType': 'no label', 'SubName': 'no label', 'SubProgID': 'no label', 'countyName': 'header label', 'FO': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'X_Coord': 'no label', 'Y_Coord': 'no label', 'Accuracy': 'no label', 'colMthTxt': 'no label', 'refPntTxt': 'no label', 'VerifyTxt': 'no label', 'collectBy': 'no label', 'ColDate': 'no label', 'locComment': 'no label', 'Congress': 'no label', 'StHouse': 'no label', 'StSenate': 'no label', 'HUC': 'header label', 'Hyperlink': 'header label', });
lyr_Water_Treatment_Plant_Facilities_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});