(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
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
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
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
                                    q = s[0x1];
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
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
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
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
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
var script = {"backgroundColor":["#FFFFFF"],"id":"rootPlayer","gap":10,"data":{"name":"Player817","displayTooltipInTouchScreens":true,"locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"rate":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"volume":1,"stopBackgroundAudio":false,"speechOnTooltip":false,"pitch":1},"history":{},"defaultLocale":"en"},"minHeight":0,"minWidth":0,"layout":"absolute","defaultMenu":["fullscreen","mute","rotation"],"start":"this.init()","scrollBarColor":"#000000","watermark":false,"width":"100%","propagateClick":false,"scrollBarMargin":2,"height":"100%","hash": "9fa6e3f7bac04dffe0ed63645441b774580c13a532712db9c3d51d5fb98164e1", "definitions": [{"id":"panorama_2DDC92C7_22A0_7F18_4199_33F1BD77C705","label":trans('panorama_2DDC92C7_22A0_7F18_4199_33F1BD77C705.label'),"frames":[{"thumbnailUrl":"media/panorama_2DDC92C7_22A0_7F18_4199_33F1BD77C705_t.webp","cube":{"levels":[{"rowCount":4,"height":2048,"class":"TiledImageResourceLevel","colCount":24,"tags":"ondemand","url":"media/panorama_2DDC92C7_22A0_7F18_4199_33F1BD77C705_0/{face}/0/{row}_{column}.webp","width":12288},{"rowCount":2,"height":1024,"class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","url":"media/panorama_2DDC92C7_22A0_7F18_4199_33F1BD77C705_0/{face}/1/{row}_{column}.webp","width":6144},{"rowCount":1,"height":512,"class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"url":"media/panorama_2DDC92C7_22A0_7F18_4199_33F1BD77C705_0/{face}/2/{row}_{column}.webp","width":3072}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"data":{"label":"Lyt3"},"vfov":180,"thumbnailUrl":"media/panorama_2DDC92C7_22A0_7F18_4199_33F1BD77C705_t.webp","hfov":360,"hfovMin":"150%","class":"Panorama","overlays":["this.overlay_2C66C4DC_22A1_9B28_4195_B290B42ECCBA"],"hfovMax":130},{"id":"MainViewerPanoramaPlayer","aaEnabled":true,"class":"PanoramaPlayer","arrowKeysAction":"translate","touchControlMode":"drag_rotation","keepModel3DLoadedWithoutLocation":true,"viewerArea":"this.MainViewer","displayPlaybackBar":true,"mouseControlMode":"drag_rotation"},{"id":"panorama_2DDC92C7_22A0_7F18_4199_33F1BD77C705_camera","class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_2FBF9C20_22A0_8B18_41B8_A6F54BB19269","enterPointingToHorizon":true},{"id":"mainPlayList","class":"PlayList","items":[{"end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_2DDC92C7_22A0_7F18_4199_33F1BD77C705_camera","media":"this.panorama_2DDC92C7_22A0_7F18_4199_33F1BD77C705"}]},{"veilColorRatios":[0,1],"titleFontSize":"1.29vmin","borderRadius":5,"backgroundColor":[],"id":"window_33CFE95B_2360_8D28_41BC_79DDC5581A31","closeButtonIconWidth":20,"closeButtonRollOverIconLineWidth":2,"veilOpacity":0.4,"verticalAlign":"middle","bodyPaddingTop":0,"closeButtonRollOverBackgroundOpacity":0,"footerBorderColor":"#000000","bodyPaddingBottom":0,"data":{"name":"Window6007"},"bodyBackgroundColorDirection":"vertical","closeButtonPaddingLeft":0,"shadow":true,"shadowHorizontalLength":3,"hideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"horizontalAlign":"center","closeButtonPressedBackgroundOpacity":0,"modal":true,"headerBackgroundColorDirection":"vertical","closeButtonPressedBackgroundColorRatios":[],"footerHeight":5,"titlePaddingLeft":5,"headerBackgroundOpacity":0,"veilShowEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"showEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"titlePaddingTop":5,"veilColorDirection":"horizontal","headerBorderSize":0,"closeButtonPressedBackgroundColor":[],"titlePaddingRight":5,"closeButtonPaddingTop":0,"headerVerticalAlign":"middle","closeButtonPressedIconLineWidth":3,"closeButtonPaddingBottom":0,"scrollBarMargin":2,"height":"90%","shadowOpacity":0.5,"width":"90%","bodyBackgroundOpacity":0,"closeButtonRollOverBackgroundColor":[],"closeButtonIconHeight":20,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonBackgroundOpacity":0,"closeButtonBorderColor":"#000000","backgroundColorRatios":[],"gap":10,"closeButtonRollOverBorderColor":"#000000","headerPaddingTop":10,"headerPaddingBottom":5,"bodyPaddingRight":0,"bodyBorderColor":"#000000","shadowColor":"#000000","layout":"vertical","minHeight":0,"titleHorizontalAlign":"left","titleFontColor":"#000000","minWidth":0,"closeButtonIconLineWidth":2,"closeButtonRollOverBackgroundColorRatios":[],"scrollBarColor":"#000000","closeButtonPaddingRight":0,"shadowSpread":1,"headerPaddingRight":0,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"closeButtonBackgroundColorRatios":[],"footerBackgroundColorRatios":[0,0.8980392156862745,1],"footerBackgroundColorDirection":"vertical","bodyBackgroundColorRatios":[0,0.5019607843137255,1],"closeButtonBorderRadius":11,"bodyBorderSize":0,"propagateClick":false,"footerBackgroundOpacity":0,"closeButtonPressedBorderColor":"#000000","veilHideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"closeButtonRollOverIconColor":"#FFFFFF","closeButtonBorderSize":0,"veilColor":["#000000","#000000"],"titlePaddingBottom":5,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"titleFontFamily":"Arial","footerBorderSize":0,"shadowVerticalLength":0,"class":"Window","bodyPaddingLeft":0,"closeButtonBackgroundColor":[],"headerPaddingLeft":10,"children":["this.WebFrame_324B79C9_2360_8D28_41A6_F0349A178238"],"headerBorderColor":"#000000","closeButtonIconColor":"#B2B2B2","closeButtonPressedBorderSize":0,"closeButtonPressedIconColor":"#FFFFFF","overflow":"scroll","headerBackgroundColorRatios":[0,0.09803921568627451,1],"closeButtonRollOverBorderSize":0},{"surfaceReticleColor":"#FFFFFF","subtitlesFontSize":"3vmin","playbackBarHeadBorderSize":0,"id":"MainViewer","playbackBarHeadShadow":true,"playbackBarProgressBackgroundColorRatios":[0],"progressBottom":10,"data":{"name":"Main Viewer"},"progressHeight":2,"vrPointerSelectionTime":2000,"playbackBarBackgroundColorDirection":"vertical","progressBorderSize":0,"progressBackgroundColor":["#000000"],"subtitlesTextShadowHorizontalLength":1,"progressBarBorderRadius":2,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"progressBarBorderSize":0,"toolTipPaddingLeft":6,"toolTipFontSize":"1.11vmin","vrThumbstickRotationStep":20,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"progressBorderRadius":2,"toolTipPaddingRight":6,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadWidth":6,"progressLeft":"33%","playbackBarHeadBorderRadius":0,"subtitlesBorderColor":"#FFFFFF","playbackBarBorderSize":0,"height":"100%","subtitlesBackgroundColor":"#000000","subtitlesFontFamily":"Arial","surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","toolTipFontColor":"#606060","subtitlesGap":0,"toolTipPaddingBottom":4,"subtitlesTextShadowOpacity":1,"firstTransitionDuration":0,"width":"100%","playbackBarProgressBorderColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"minHeight":50,"subtitlesFontColor":"#FFFFFF","minWidth":100,"playbackBarBorderRadius":0,"toolTipShadowColor":"#333138","playbackBarBorderColor":"#FFFFFF","toolTipTextShadowColor":"#000000","toolTipFontFamily":"Arial","playbackBarRight":0,"vrPointerColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"playbackBarProgressBorderRadius":0,"progressBackgroundColorRatios":[0],"subtitlesTextShadowVerticalLength":1,"subtitlesBottom":50,"toolTipBorderColor":"#767676","progressRight":"33%","propagateClick":false,"progressOpacity":0.7,"playbackBarHeadShadowOpacity":0.7,"progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","class":"ViewerArea","subtitlesTop":0,"vrPointerSelectionColor":"#FF6600","playbackBarHeadHeight":15,"playbackBarHeadShadowBlurRadius":3,"playbackBarHeadShadowColor":"#000000","subtitlesTextShadowColor":"#000000","toolTipPaddingTop":4,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarLeft":0,"progressBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBorderSize":0,"progressBarBackgroundColor":["#3399FF"]},{"id":"overlay_2C66C4DC_22A1_9B28_4195_B290B42ECCBA","class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"pitch":26.12,"vfov":10.21,"hfov":32.38,"yaw":158.31,"image":{"class":"ImageResource","levels":[{"height":163,"class":"ImageResourceLevel","url":"media/panorama_2DDC92C7_22A0_7F18_4199_33F1BD77C705_HS_6k3nqquv.webp","width":532}]},"data":{"label":"Polygon"}}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_2D9FE514_22A1_853F_4184_2183D093B0B4"],"rollOverDisplay":true,"data":{"label":"Polygon"}},{"id":"sequence_2FBF9C20_22A0_8B18_41B8_A6F54BB19269","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}]},{"backgroundColor":[],"id":"WebFrame_324B79C9_2360_8D28_41A6_F0349A178238","data":{"name":"WebFrame6730"},"minHeight":0,"minWidth":0,"url":trans('WebFrame_324B79C9_2360_8D28_41A6_F0349A178238.url'),"width":"100%","propagateClick":false,"height":"100%","class":"WebFrame","backgroundColorRatios":[]},{"id":"HotspotPanoramaOverlayArea_2D9FE514_22A1_853F_4184_2183D093B0B4","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"mapColor":"image","click":"this.WebFrame_324B79C9_2360_8D28_41A6_F0349A178238.set('url', this.translate('PopupWebFrameBehaviour_33CD595D_2360_8D28_41BD_CE980FBC1EA8.url')); this.showWindow(this.window_33CFE95B_2360_8D28_41BC_79DDC5581A31, null, false)"}],"class":"Player","children":["this.MainViewer"],"backgroundColorRatios":[0],"scripts":{"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getPixels":TDV.Tour.Script.getPixels,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"historyGoBack":TDV.Tour.Script.historyGoBack,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"textToSpeech":TDV.Tour.Script.textToSpeech,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getMediaByName":TDV.Tour.Script.getMediaByName,"shareSocial":TDV.Tour.Script.shareSocial,"showWindow":TDV.Tour.Script.showWindow,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getKey":TDV.Tour.Script.getKey,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"init":TDV.Tour.Script.init,"translate":TDV.Tour.Script.translate,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"quizShowScore":TDV.Tour.Script.quizShowScore,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"createTween":TDV.Tour.Script.createTween,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getComponentByName":TDV.Tour.Script.getComponentByName,"setLocale":TDV.Tour.Script.setLocale,"initQuiz":TDV.Tour.Script.initQuiz,"unregisterKey":TDV.Tour.Script.unregisterKey,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"clone":TDV.Tour.Script.clone,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"executeJS":TDV.Tour.Script.executeJS,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setMapLocation":TDV.Tour.Script.setMapLocation,"historyGoForward":TDV.Tour.Script.historyGoForward,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"toggleVR":TDV.Tour.Script.toggleVR,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizStart":TDV.Tour.Script.quizStart,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"playAudioList":TDV.Tour.Script.playAudioList,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"enableVR":TDV.Tour.Script.enableVR,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"downloadFile":TDV.Tour.Script.downloadFile,"getOverlays":TDV.Tour.Script.getOverlays,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"resumePlayers":TDV.Tour.Script.resumePlayers,"registerKey":TDV.Tour.Script.registerKey,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setValue":TDV.Tour.Script.setValue,"disableVR":TDV.Tour.Script.disableVR,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"mixObject":TDV.Tour.Script.mixObject,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"quizFinish":TDV.Tour.Script.quizFinish,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"openLink":TDV.Tour.Script.openLink,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"startMeasurement":TDV.Tour.Script.startMeasurement,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"cloneBindings":TDV.Tour.Script.cloneBindings,"existsKey":TDV.Tour.Script.existsKey,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"initAnalytics":TDV.Tour.Script.initAnalytics,"isPanorama":TDV.Tour.Script.isPanorama}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.23, Thu May 14 2026