(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"gap":10,"minHeight":0,"minWidth":0,"id":"rootPlayer","backgroundColor":["#FFFFFF"],"data":{"defaultLocale":"es","textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"volume":1,"speechOnQuizQuestion":false,"rate":1,"stopBackgroundAudio":false,"speechOnTooltip":false},"displayTooltipInTouchScreens":true,"name":"Player452","locales":{"es":"locale/es.txt"},"history":{}},"backgroundColorRatios":[0],"hash": "6fc0b9d16f1abcf2e73ba89acefbf24c4f5f8a8ce3dd97a110e0f9999a20aaf1", "definitions": [{"height":"100%","firstTransitionDuration":0,"toolTipFontFamily":"Arial","toolTipPaddingTop":4,"minHeight":50,"playbackBarHeadBorderColor":"#000000","minWidth":100,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesGap":0,"vrPointerSelectionTime":2000,"toolTipPaddingBottom":4,"toolTipPaddingRight":6,"playbackBarBorderSize":0,"subtitlesTextShadowColor":"#000000","progressBackgroundColor":["#000000"],"playbackBarBottom":5,"subtitlesBackgroundColor":"#000000","subtitlesBottom":50,"toolTipPaddingLeft":6,"surfaceReticleSelectionColor":"#FFFFFF","progressBottom":10,"playbackBarBackgroundColor":["#FFFFFF"],"progressHeight":2,"vrPointerColor":"#FFFFFF","playbackBarHeight":10,"toolTipBackgroundColor":"#F6F6F6","subtitlesFontSize":"3vmin","progressBorderSize":0,"data":{"name":"Main Viewer"},"subtitlesBackgroundOpacity":0.2,"progressBarBorderRadius":2,"progressBarBorderSize":0,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"progressBackgroundColorRatios":[0],"propagateClick":false,"toolTipBorderColor":"#767676","playbackBarRight":0,"progressBorderRadius":2,"playbackBarBackgroundColorDirection":"vertical","toolTipShadowColor":"#333138","progressRight":"33%","progressOpacity":0.7,"playbackBarProgressBorderRadius":0,"toolTipFontColor":"#606060","playbackBarProgressBackgroundColor":["#3399FF"],"toolTipTextShadowColor":"#000000","subtitlesTextShadowOpacity":1,"subtitlesBorderColor":"#FFFFFF","progressLeft":"33%","id":"MainViewer","subtitlesTextShadowVerticalLength":1,"progressBarBackgroundColorDirection":"horizontal","progressBarBorderColor":"#000000","subtitlesTop":0,"playbackBarHeadShadowOpacity":0.7,"toolTipFontSize":"1.11vmin","progressBarBackgroundColorRatios":[0],"playbackBarLeft":0,"playbackBarBackgroundOpacity":1,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderSize":0,"subtitlesFontFamily":"Arial","playbackBarHeadShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"playbackBarHeadShadow":true,"subtitlesFontColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"playbackBarBorderRadius":0,"progressBorderColor":"#000000","playbackBarProgressBorderColor":"#000000","class":"ViewerArea","vrPointerSelectionColor":"#FF6600","width":"100%","progressBarBackgroundColor":["#3399FF"],"surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderRadius":0},{"items":[{"camera":"this.panorama_0C9405E7_0630_F029_4176_3F392F92965E_camera","media":"this.panorama_0C9405E7_0630_F029_4176_3F392F92965E","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"},{"camera":"this.panorama_0D58EE98_0630_D0E7_4196_1DE57D71B94F_camera","media":"this.panorama_0D58EE98_0630_D0E7_4196_1DE57D71B94F","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","class":"PanoramaPlayListItem"}],"id":"mainPlayList","class":"PlayList"},{"frames":[{"cube":{"class":"ImageResource","levels":[{"width":15360,"url":"media/panorama_0D58EE98_0630_D0E7_4196_1DE57D71B94F_0/{face}/0/{row}_{column}.jpg","colCount":30,"class":"TiledImageResourceLevel","height":2560,"tags":"ondemand","rowCount":5},{"width":9216,"url":"media/panorama_0D58EE98_0630_D0E7_4196_1DE57D71B94F_0/{face}/1/{row}_{column}.jpg","colCount":18,"class":"TiledImageResourceLevel","height":1536,"tags":"ondemand","rowCount":3},{"width":6144,"url":"media/panorama_0D58EE98_0630_D0E7_4196_1DE57D71B94F_0/{face}/2/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","rowCount":2},{"width":3072,"url":"media/panorama_0D58EE98_0630_D0E7_4196_1DE57D71B94F_0/{face}/3/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"rowCount":1}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_0D58EE98_0630_D0E7_4196_1DE57D71B94F_t.jpg"}],"overlays":["this.overlay_10C4CFD2_0630_506B_4198_85B54F9E6B5C"],"label":trans('panorama_0D58EE98_0630_D0E7_4196_1DE57D71B94F.label'),"thumbnailUrl":"media/panorama_0D58EE98_0630_D0E7_4196_1DE57D71B94F_t.jpg","hfovMax":130,"id":"panorama_0D58EE98_0630_D0E7_4196_1DE57D71B94F","class":"Panorama","vfov":180,"hfovMin":"120%","adjacentPanoramas":[{"data":{"overlayID":"overlay_10C4CFD2_0630_506B_4198_85B54F9E6B5C"},"panorama":"this.panorama_0C9405E7_0630_F029_4176_3F392F92965E","yaw":50.73,"distance":9.81,"select":"this.overlay_10C4CFD2_0630_506B_4198_85B54F9E6B5C.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":-21.21,"class":"AdjacentPanorama"}],"data":{"label":"Alba Habitacion 01"},"hfov":360},{"viewerArea":"this.MainViewer","arrowKeysAction":"translate","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"touchControlMode":"drag_rotation","aaEnabled":true,"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer"},{"frames":[{"cube":{"class":"ImageResource","levels":[{"width":15360,"url":"media/panorama_0C9405E7_0630_F029_4176_3F392F92965E_0/{face}/0/{row}_{column}.jpg","colCount":30,"class":"TiledImageResourceLevel","height":2560,"tags":"ondemand","rowCount":5},{"width":9216,"url":"media/panorama_0C9405E7_0630_F029_4176_3F392F92965E_0/{face}/1/{row}_{column}.jpg","colCount":18,"class":"TiledImageResourceLevel","height":1536,"tags":"ondemand","rowCount":3},{"width":6144,"url":"media/panorama_0C9405E7_0630_F029_4176_3F392F92965E_0/{face}/2/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","rowCount":2},{"width":3072,"url":"media/panorama_0C9405E7_0630_F029_4176_3F392F92965E_0/{face}/3/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"rowCount":1}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_0C9405E7_0630_F029_4176_3F392F92965E_t.jpg"}],"overlays":["this.overlay_12463CAA_0630_D03B_417F_D3BB915C4B20"],"label":trans('panorama_0C9405E7_0630_F029_4176_3F392F92965E.label'),"thumbnailUrl":"media/panorama_0C9405E7_0630_F029_4176_3F392F92965E_t.jpg","hfovMax":130,"id":"panorama_0C9405E7_0630_F029_4176_3F392F92965E","class":"Panorama","vfov":180,"hfovMin":"120%","adjacentPanoramas":[{"data":{"overlayID":"overlay_12463CAA_0630_D03B_417F_D3BB915C4B20"},"panorama":"this.panorama_0D58EE98_0630_D0E7_4196_1DE57D71B94F","yaw":-21.21,"distance":6.72,"select":"this.overlay_12463CAA_0630_D03B_417F_D3BB915C4B20.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":50.73,"class":"AdjacentPanorama"}],"data":{"label":"Alba Sala 01"},"hfov":360},{"enterPointingToHorizon":true,"initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"},"id":"panorama_0D58EE98_0630_D0E7_4196_1DE57D71B94F_camera","class":"PanoramaCamera"},{"enterPointingToHorizon":true,"initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"},"id":"panorama_0C9405E7_0630_F029_4176_3F392F92965E_camera","class":"PanoramaCamera"},{"data":{"hasPanoramaAction":true,"label":"Image"},"id":"overlay_10C4CFD2_0630_506B_4198_85B54F9E6B5C","maps":[],"items":[{"pitch":-9.82,"yaw":50.73,"class":"HotspotPanoramaOverlayImage","distance":50,"vfov":10.5,"rotationX":14.58,"image":"this.res_130B6D76_0630_702B_4182_977319FC0D8B","scaleMode":"fit_inside","hfov":10.5,"rotationY":-35.06,"roll":-8.64,"data":{"label":"Image"}}],"areas":["this.HotspotPanoramaOverlayArea_1130AFD9_0630_5019_4187_ECCFF4BE5A78"],"useHandCursor":true,"enabledInCardboard":true,"class":"HotspotPanoramaOverlay"},{"data":{"hasPanoramaAction":true,"label":"Image"},"id":"overlay_12463CAA_0630_D03B_417F_D3BB915C4B20","maps":[],"items":[{"pitch":-14.18,"yaw":-21.21,"class":"HotspotPanoramaOverlayImage","distance":50,"vfov":12.19,"image":"this.res_130B1D75_0630_7029_4197_1D23FC672230","scaleMode":"fit_inside","hfov":10.5,"data":{"label":"Image"}}],"areas":["this.HotspotPanoramaOverlayArea_12823CD1_0630_D069_418A_7A954E0E5360"],"useHandCursor":true,"enabledInCardboard":true,"class":"HotspotPanoramaOverlay"},{"levels":[{"width":151,"url":"media/res_130B6D76_0630_702B_4182_977319FC0D8B_0.png","class":"ImageResourceLevel","height":151}],"id":"res_130B6D76_0630_702B_4182_977319FC0D8B","class":"ImageResource"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any","id":"HotspotPanoramaOverlayArea_1130AFD9_0630_5019_4187_ECCFF4BE5A78","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"levels":[{"width":124,"url":"media/res_130B1D75_0630_7029_4197_1D23FC672230_0.png","class":"ImageResourceLevel","height":144}],"id":"res_130B1D75_0630_7029_4197_1D23FC672230","class":"ImageResource"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any","id":"HotspotPanoramaOverlayArea_12823CD1_0630_D069_418A_7A954E0E5360","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true}],"watermark":false,"defaultMenu":["fullscreen","mute","rotation"],"start":"this.init()","scrollBarMargin":2,"scripts":{"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"clone":TDV.Tour.Script.clone,"openLink":TDV.Tour.Script.openLink,"getMainViewer":TDV.Tour.Script.getMainViewer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"getOverlays":TDV.Tour.Script.getOverlays,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPixels":TDV.Tour.Script.getPixels,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"quizShowScore":TDV.Tour.Script.quizShowScore,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizStart":TDV.Tour.Script.quizStart,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizFinish":TDV.Tour.Script.quizFinish,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"enableVR":TDV.Tour.Script.enableVR,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setValue":TDV.Tour.Script.setValue,"init":TDV.Tour.Script.init,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"historyGoBack":TDV.Tour.Script.historyGoBack,"textToSpeech":TDV.Tour.Script.textToSpeech,"toggleVR":TDV.Tour.Script.toggleVR,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"historyGoForward":TDV.Tour.Script.historyGoForward,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getComponentByName":TDV.Tour.Script.getComponentByName,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"registerKey":TDV.Tour.Script.registerKey,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"existsKey":TDV.Tour.Script.existsKey,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"cloneBindings":TDV.Tour.Script.cloneBindings,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"unregisterKey":TDV.Tour.Script.unregisterKey,"disableVR":TDV.Tour.Script.disableVR,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"initQuiz":TDV.Tour.Script.initQuiz,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"downloadFile":TDV.Tour.Script.downloadFile,"isPanorama":TDV.Tour.Script.isPanorama,"mixObject":TDV.Tour.Script.mixObject,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setMapLocation":TDV.Tour.Script.setMapLocation,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"executeJS":TDV.Tour.Script.executeJS,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getKey":TDV.Tour.Script.getKey,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"shareSocial":TDV.Tour.Script.shareSocial,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"showWindow":TDV.Tour.Script.showWindow,"getMediaByName":TDV.Tour.Script.getMediaByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"startMeasurement":TDV.Tour.Script.startMeasurement,"createTween":TDV.Tour.Script.createTween,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"translate":TDV.Tour.Script.translate,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setLocale":TDV.Tour.Script.setLocale,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion},"class":"Player","width":"100%","height":"100%","scrollBarColor":"#000000","layout":"absolute","propagateClick":false,"children":["this.MainViewer"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.11.js.map
})();
//Generated with v2024.0.11, Tue Jul 30 2024