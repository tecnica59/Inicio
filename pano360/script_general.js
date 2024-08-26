(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
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
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
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
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
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
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"gap":10,"height":"100%","backgroundColorRatios":[0],"minHeight":0,"start":"this.init()","minWidth":0,"data":{"displayTooltipInTouchScreens":true,"name":"Player480","textToSpeechConfig":{"pitch":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"volume":1,"stopBackgroundAudio":false,"rate":1,"speechOnInfoWindow":false},"defaultLocale":"es","locales":{"es":"locale/es.txt"},"history":{}},"id":"rootPlayer","backgroundColor":["#FFFFFF"],"children":["this.MainViewer"],"hash": "af3c17bf2d03cf2bfff19b0f6959cdbac9e910d98254c1f3a9894635b850c6bd", "definitions": [{"playbackBarBackgroundOpacity":1,"height":"100%","playbackBarHeadBorderRadius":0,"surfaceReticleColor":"#FFFFFF","minHeight":50,"playbackBarHeadBackgroundColor":["#111111","#666666"],"minWidth":100,"data":{"name":"Main Viewer"},"playbackBarHeadBorderColor":"#000000","progressBackgroundColor":["#000000"],"playbackBarBottom":5,"playbackBarBorderSize":0,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","vrPointerSelectionColor":"#FF6600","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesBottom":50,"progressBottom":10,"playbackBarHeight":10,"progressHeight":2,"vrPointerSelectionTime":2000,"subtitlesTextShadowColor":"#000000","toolTipShadowColor":"#333138","toolTipBorderColor":"#767676","propagateClick":false,"progressBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","vrPointerColor":"#FFFFFF","toolTipFontSize":"1.11vmin","progressBarBorderSize":0,"progressBarBorderRadius":2,"playbackBarProgressBorderSize":0,"toolTipFontColor":"#606060","subtitlesFontSize":"3vmin","playbackBarRight":0,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","firstTransitionDuration":0,"toolTipTextShadowColor":"#000000","progressBackgroundColorRatios":[0],"progressBorderRadius":2,"playbackBarProgressBorderRadius":0,"progressOpacity":0.7,"progressLeft":"33%","progressRight":"33%","subtitlesBackgroundOpacity":0.2,"playbackBarProgressBackgroundColor":["#3399FF"],"id":"MainViewer","progressBarBackgroundColorDirection":"horizontal","playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowOpacity":1,"playbackBarLeft":0,"progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"playbackBarHeadHeight":15,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadowColor":"#000000","subtitlesTextShadowVerticalLength":1,"subtitlesFontColor":"#FFFFFF","playbackBarBorderColor":"#FFFFFF","toolTipPaddingRight":6,"playbackBarHeadBackgroundColorRatios":[0,1],"class":"ViewerArea","playbackBarHeadShadow":true,"playbackBarBorderRadius":0,"toolTipFontFamily":"Arial","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderSize":0,"progressBorderColor":"#000000","subtitlesFontFamily":"Arial","playbackBarProgressBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","toolTipPaddingTop":4,"width":"100%","subtitlesTextShadowHorizontalLength":1,"toolTipPaddingLeft":6,"toolTipPaddingBottom":4,"progressBarBackgroundColor":["#3399FF"],"subtitlesTop":0},{"items":["this.albumitem_69949843_7D09_8456_41D2_5232C57330BD"],"id":"playList_69957843_7D09_8456_41BF_FB75B852B56C","class":"PlayList"},{"data":{"label":"DSC00044"},"duration":5000,"width":2592,"class":"Photo","height":1944,"image":{"class":"ImageResource","levels":[{"url":"media/photo_72EECA6F_7D0B_842E_41D2_670EDA33BC00.jpg","class":"ImageResourceLevel"}]},"label":trans('photo_72EECA6F_7D0B_842E_41D2_670EDA33BC00.label'),"thumbnailUrl":"media/photo_72EECA6F_7D0B_842E_41D2_670EDA33BC00_t.jpg","id":"photo_72EECA6F_7D0B_842E_41D2_670EDA33BC00"},{"label":trans('panorama_714E2B2A_7D0A_85D6_41C1_A489E49808F0.label'),"frames":[{"cube":{"class":"ImageResource","levels":[{"width":18432,"url":"media/panorama_714E2B2A_7D0A_85D6_41C1_A489E49808F0_0/{face}/0/{row}_{column}.jpg","colCount":36,"height":3072,"tags":"ondemand","rowCount":6,"class":"TiledImageResourceLevel"},{"width":9216,"url":"media/panorama_714E2B2A_7D0A_85D6_41C1_A489E49808F0_0/{face}/1/{row}_{column}.jpg","colCount":18,"height":1536,"tags":"ondemand","rowCount":3,"class":"TiledImageResourceLevel"},{"width":6144,"url":"media/panorama_714E2B2A_7D0A_85D6_41C1_A489E49808F0_0/{face}/2/{row}_{column}.jpg","colCount":12,"height":1024,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel"},{"width":3072,"url":"media/panorama_714E2B2A_7D0A_85D6_41C1_A489E49808F0_0/{face}/3/{row}_{column}.jpg","colCount":6,"height":512,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel"}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_714E2B2A_7D0A_85D6_41C1_A489E49808F0_t.jpg"}],"thumbnailUrl":"media/panorama_714E2B2A_7D0A_85D6_41C1_A489E49808F0_t.jpg","hfov":360,"id":"panorama_714E2B2A_7D0A_85D6_41C1_A489E49808F0","class":"Panorama","overlays":["this.overlay_73AAB02A_7D09_83D6_41A3_3FDA39A01E7C","this.overlay_6C27C3F9_7D1A_8432_41A9_67947CBC3155"],"data":{"label":"PANO_20240821_101321"},"vfov":180,"hfovMin":"120%","hfovMax":130},{"playList":"this.PhotoAlbumEditable_6993E8C8_7D09_8452_4184_E0F80FC7E673_AlbumPlayList","id":"PhotoAlbumEditable_6993E8C8_7D09_8452_4184_E0F80FC7E673","class":"PhotoAlbum"},{"titleFontColor":"#000000","closeButtonPaddingLeft":0,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"overflow":"scroll","backgroundColorRatios":[],"closeButtonPressedBorderColor":"#000000","close":"this.playList_69957843_7D09_8456_41BF_FB75B852B56C.set('selectedIndex', -1);","minHeight":0,"closeButtonPaddingRight":0,"minWidth":0,"closeButtonBorderSize":0,"closeButtonIconWidth":12,"veilColor":["#000000","#000000"],"data":{"name":"Window4658"},"bodyPaddingTop":5,"veilHideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"bodyPaddingBottom":5,"closeButtonBorderRadius":11,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"closeButtonPressedBackgroundColor":["#3A1D1F"],"veilShowEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"closeButtonPaddingTop":0,"closeButtonPressedBorderSize":0,"headerBackgroundOpacity":1,"footerBorderColor":"#000000","closeButtonPressedBackgroundColorRatios":[0],"closeButtonRollOverBackgroundColor":["#C13535"],"titleFontFamily":"Arial","headerPaddingTop":10,"closeButtonRollOverBorderSize":0,"shadowSpread":1,"veilColorRatios":[0,1],"modal":true,"closeButtonBackgroundColorRatios":[],"scrollBarMargin":2,"headerBackgroundColorRatios":[0,0.5215686274509804,1,1],"headerBorderSize":0,"closeButtonPressedIconLineWidth":2,"title":trans('window_6DB25AB6_7D0E_843E_41C6_451E8AE05A0A.title'),"propagateClick":false,"bodyBackgroundOpacity":1,"closeButtonBackgroundOpacity":0,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#000000","#FFFFFF"],"closeButtonIconHeight":12,"scrollBarColor":"#000000","closeButtonRollOverIconLineWidth":2,"children":["this.htmlText_6DB29AB6_7D0E_843E_41C3_C14C123CEDF6","this.container_6994F843_7D09_8456_41D4_BB8A5D1A585D"],"headerPaddingLeft":10,"footerHeight":5,"veilOpacity":0.4,"headerPaddingBottom":10,"shadowHorizontalLength":3,"bodyPaddingRight":5,"horizontalAlign":"center","titlePaddingBottom":5,"shadowVerticalLength":0,"bodyBorderColor":"#000000","closeButtonBorderColor":"#000000","footerBackgroundColorDirection":"vertical","bodyBorderSize":0,"closeButtonPressedBackgroundOpacity":0,"titleFontSize":"1.29vmin","verticalAlign":"middle","headerPaddingRight":10,"closeButtonIconLineWidth":2,"headerBackgroundColorDirection":"vertical","shadow":true,"id":"window_6DB25AB6_7D0E_843E_41C6_451E8AE05A0A","backgroundColor":[],"footerBackgroundColorRatios":[0,0.8980392156862745,1],"veilColorDirection":"horizontal","closeButtonRollOverBorderColor":"#000000","shadowOpacity":0.5,"hideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"closeButtonRollOverBackgroundColorRatios":[0],"showEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"closeButtonPressedIconColor":"#FFFFFF","headerVerticalAlign":"middle","footerBorderSize":0,"headerBorderColor":"#000000","shadowColor":"#000000","titlePaddingTop":5,"borderRadius":5,"titlePaddingRight":5,"titlePaddingLeft":5,"closeButtonRollOverBackgroundOpacity":0,"width":400,"closeButtonPaddingBottom":0,"class":"Window","bodyBackgroundColorDirection":"vertical","footerBackgroundOpacity":1,"closeButtonRollOverIconColor":"#FFFFFF","bodyBackgroundColorRatios":[0,0.5019607843137255,1],"closeButtonBackgroundColor":[],"bodyPaddingLeft":5,"closeButtonIconColor":"#000000","gap":10,"layout":"vertical","titleHorizontalAlign":"center","height":600},{"items":[{"camera":"this.panorama_714E2B2A_7D0A_85D6_41C1_A489E49808F0_camera","media":"this.panorama_714E2B2A_7D0A_85D6_41C1_A489E49808F0","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"}],"id":"mainPlayList","class":"PlayList"},{"touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"aaEnabled":true,"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","arrowKeysAction":"translate"},{"initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"},"enterPointingToHorizon":true,"id":"panorama_714E2B2A_7D0A_85D6_41C1_A489E49808F0_camera","class":"PanoramaCamera"},{"media":"this.PhotoAlbumEditable_6993E8C8_7D09_8452_4184_E0F80FC7E673","id":"albumitem_69949843_7D09_8456_41D2_5232C57330BD","class":"PhotoAlbumPlayListItem","player":"this.viewer_uid6994A843_7D09_8456_4192_899A329EF802PhotoAlbumPlayer"},{"data":{"label":"Image"},"areas":["this.HotspotPanoramaOverlayArea_735060B2_7D09_8436_418B_5C143585878F"],"maps":[],"useHandCursor":true,"items":[{"pitch":-3.29,"hfov":10.5,"yaw":-96.02,"class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_6D985EC0_7D0B_9C51_419C_0B98A9D333A8","scaleMode":"fit_inside","vfov":8.84,"data":{"label":"Image"}}],"id":"overlay_73AAB02A_7D09_83D6_41A3_3FDA39A01E7C","class":"HotspotPanoramaOverlay"},{"data":{"label":"Image"},"areas":["this.HotspotPanoramaOverlayArea_6DA15465_7D1A_8C52_41C8_3CB51DE36A13"],"maps":[],"useHandCursor":true,"items":[{"pitch":-9.9,"hfov":10.5,"yaw":-10.73,"class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_6C8C2860_7D0A_8452_41D2_5EC0FC1D1012","scaleMode":"fit_inside","vfov":9.22,"data":{"label":"Image"}}],"enabledInCardboard":true,"id":"overlay_6C27C3F9_7D1A_8432_41A9_67947CBC3155","class":"HotspotPanoramaOverlay"},{"items":[{"camera":{"scaleMode":"fit_inside","class":"PhotoCamera"},"media":"this.photo_72EECA6F_7D0B_842E_41D2_670EDA33BC00","class":"PhotoPlayListItem"}],"id":"PhotoAlbumEditable_6993E8C8_7D09_8452_4184_E0F80FC7E673_AlbumPlayList","class":"PhotoPlayList"},{"scrollBarHorizontalMargin":-3,"paddingTop":10,"paddingBottom":10,"height":"50%","backgroundOpacity":0,"minHeight":0,"minWidth":0,"id":"htmlText_6DB29AB6_7D0E_843E_41C3_C14C123CEDF6","data":{"name":"HTMLText4659"},"paddingLeft":10,"scrollBarColor":"#000000","propagateClick":false,"class":"HTMLText","width":"100%","paddingRight":10,"scrollBarVisible":"always","html":trans('htmlText_6DB29AB6_7D0E_843E_41C3_C14C123CEDF6.html')},{"height":"50%","gap":10,"overflow":"scroll","backgroundColorRatios":[],"minHeight":0,"minWidth":0,"data":{"name":"Container9708"},"id":"container_6994F843_7D09_8456_41D4_BB8A5D1A585D","backgroundColor":[],"scrollBarMargin":2,"propagateClick":false,"class":"Container","width":"100%","children":["this.viewer_uid6994A843_7D09_8456_4192_899A329EF802"],"scrollBarColor":"#000000","layout":"absolute"},{"viewerArea":"this.viewer_uid6994A843_7D09_8456_4192_899A329EF802","id":"viewer_uid6994A843_7D09_8456_4192_899A329EF802PhotoAlbumPlayer","class":"PhotoAlbumPlayer"},{"displayTooltipInTouchScreens":true,"click":"this.showWindow(this.window_6DB25AB6_7D0E_843E_41C6_451E8AE05A0A, null, false); this.playList_69957843_7D09_8456_41BF_FB75B852B56C.set('selectedIndex', 0); ","mapColor":"any","id":"HotspotPanoramaOverlayArea_735060B2_7D09_8436_418B_5C143585878F","class":"HotspotPanoramaOverlayArea"},{"id":"res_6D985EC0_7D0B_9C51_419C_0B98A9D333A8","class":"ImageResource","levels":[{"width":120,"url":"media/res_6D985EC0_7D0B_9C51_419C_0B98A9D333A8_0.png","height":101,"class":"ImageResourceLevel"}]},{"displayTooltipInTouchScreens":true,"click":"this.openLink(this.translate('LinkBehaviour_6C50D644_7D0A_8C52_41BC_3E6B1DD080EE.source'), '_blank')","mapColor":"any","id":"HotspotPanoramaOverlayArea_6DA15465_7D1A_8C52_41C8_3CB51DE36A13","class":"HotspotPanoramaOverlayArea"},{"id":"res_6C8C2860_7D0A_8452_41D2_5EC0FC1D1012","class":"ImageResource","levels":[{"width":131,"url":"media/res_6C8C2860_7D0A_8452_41D2_5EC0FC1D1012_0.png","height":115,"class":"ImageResourceLevel"}]},{"playbackBarBackgroundOpacity":1,"height":"100%","playbackBarHeadBorderRadius":0,"surfaceReticleColor":"#FFFFFF","minHeight":50,"playbackBarHeadBackgroundColor":["#111111","#666666"],"minWidth":100,"data":{"name":"ViewerArea9707"},"playbackBarHeadBorderColor":"#000000","progressBackgroundColor":["#000000"],"playbackBarBottom":5,"playbackBarBorderSize":0,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","vrPointerSelectionColor":"#FF6600","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesBottom":10,"progressBottom":10,"playbackBarHeight":10,"progressHeight":2,"vrPointerSelectionTime":2000,"subtitlesTextShadowColor":"#000000","toolTipShadowColor":"#333138","toolTipBorderColor":"#767676","propagateClick":false,"progressBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","vrPointerColor":"#FFFFFF","toolTipFontSize":"1.11vmin","progressBarBorderSize":0,"progressBarBorderRadius":2,"playbackBarProgressBorderSize":0,"toolTipFontColor":"#606060","subtitlesFontSize":"3vmin","playbackBarRight":0,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","firstTransitionDuration":0,"toolTipTextShadowColor":"#000000","progressBackgroundColorRatios":[0],"progressBorderRadius":2,"playbackBarProgressBorderRadius":0,"progressOpacity":0.7,"progressLeft":"33%","progressRight":"33%","subtitlesBackgroundOpacity":0.2,"playbackBarProgressBackgroundColor":["#3399FF"],"id":"viewer_uid6994A843_7D09_8456_4192_899A329EF802","progressBarBackgroundColorDirection":"horizontal","playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowOpacity":1,"playbackBarLeft":0,"progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"playbackBarHeadHeight":15,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadowColor":"#000000","subtitlesTextShadowVerticalLength":1,"subtitlesFontColor":"#FFFFFF","playbackBarBorderColor":"#FFFFFF","toolTipPaddingRight":6,"playbackBarHeadBackgroundColorRatios":[0,1],"class":"ViewerArea","playbackBarHeadShadow":true,"playbackBarBorderRadius":0,"toolTipFontFamily":"Arial","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderSize":0,"progressBorderColor":"#000000","subtitlesFontFamily":"Arial","playbackBarProgressBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","toolTipPaddingTop":4,"width":"100%","subtitlesTextShadowHorizontalLength":1,"toolTipPaddingLeft":6,"toolTipPaddingBottom":4,"progressBarBackgroundColor":["#3399FF"],"subtitlesTop":0}],"watermark":false,"scrollBarMargin":2,"propagateClick":false,"class":"Player","width":"100%","defaultMenu":["fullscreen","mute","rotation"],"scripts":{"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getMainViewer":TDV.Tour.Script.getMainViewer,"shareSocial":TDV.Tour.Script.shareSocial,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"clone":TDV.Tour.Script.clone,"openLink":TDV.Tour.Script.openLink,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"downloadFile":TDV.Tour.Script.downloadFile,"quizFinish":TDV.Tour.Script.quizFinish,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"executeJS":TDV.Tour.Script.executeJS,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"showWindow":TDV.Tour.Script.showWindow,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getPixels":TDV.Tour.Script.getPixels,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"startMeasurement":TDV.Tour.Script.startMeasurement,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setMapLocation":TDV.Tour.Script.setMapLocation,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setValue":TDV.Tour.Script.setValue,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"init":TDV.Tour.Script.init,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"getMediaByName":TDV.Tour.Script.getMediaByName,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"historyGoForward":TDV.Tour.Script.historyGoForward,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getOverlays":TDV.Tour.Script.getOverlays,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"initAnalytics":TDV.Tour.Script.initAnalytics,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"initQuiz":TDV.Tour.Script.initQuiz,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"enableVR":TDV.Tour.Script.enableVR,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"disableVR":TDV.Tour.Script.disableVR,"getKey":TDV.Tour.Script.getKey,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getComponentByName":TDV.Tour.Script.getComponentByName,"toggleVR":TDV.Tour.Script.toggleVR,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"isPanorama":TDV.Tour.Script.isPanorama,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"registerKey":TDV.Tour.Script.registerKey,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"unregisterKey":TDV.Tour.Script.unregisterKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"existsKey":TDV.Tour.Script.existsKey,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizShowScore":TDV.Tour.Script.quizShowScore,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"mixObject":TDV.Tour.Script.mixObject,"cloneBindings":TDV.Tour.Script.cloneBindings,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"createTween":TDV.Tour.Script.createTween,"setLocale":TDV.Tour.Script.setLocale,"translate":TDV.Tour.Script.translate,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizStart":TDV.Tour.Script.quizStart},"scrollBarColor":"#000000","layout":"absolute"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.12.js.map
})();
//Generated with v2024.0.12, Thu Aug 22 2024