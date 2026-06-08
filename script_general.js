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
var script = {"id":"rootPlayer","children":["this.MainViewer","this.WebFrame_B77CE4EA_A77E_4A80_41C2_B2291D10E597"],"data":{"history":{},"locales":{"en":"locale/en.txt"},"defaultLocale":"en","name":"Player817","displayTooltipInTouchScreens":true,"textToSpeechConfig":{"speechOnTooltip":false,"rate":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"volume":1,"pitch":1}},"backgroundColor":["#FFFFFF"],"gap":10,"scripts":{"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"isPanorama":TDV.Tour.Script.isPanorama,"quizFinish":TDV.Tour.Script.quizFinish,"getMainViewer":TDV.Tour.Script.getMainViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"createTween":TDV.Tour.Script.createTween,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getKey":TDV.Tour.Script.getKey,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"initAnalytics":TDV.Tour.Script.initAnalytics,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"textToSpeech":TDV.Tour.Script.textToSpeech,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"playAudioList":TDV.Tour.Script.playAudioList,"init":TDV.Tour.Script.init,"toggleVR":TDV.Tour.Script.toggleVR,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"showWindow":TDV.Tour.Script.showWindow,"downloadFile":TDV.Tour.Script.downloadFile,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"shareSocial":TDV.Tour.Script.shareSocial,"disableVR":TDV.Tour.Script.disableVR,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setLocale":TDV.Tour.Script.setLocale,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"translate":TDV.Tour.Script.translate,"clone":TDV.Tour.Script.clone,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"startMeasurement":TDV.Tour.Script.startMeasurement,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getOverlays":TDV.Tour.Script.getOverlays,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"executeJS":TDV.Tour.Script.executeJS,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"enableVR":TDV.Tour.Script.enableVR,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"initQuiz":TDV.Tour.Script.initQuiz,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"resumePlayers":TDV.Tour.Script.resumePlayers,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setValue":TDV.Tour.Script.setValue,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"mixObject":TDV.Tour.Script.mixObject,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizShowScore":TDV.Tour.Script.quizShowScore,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"unregisterKey":TDV.Tour.Script.unregisterKey,"setMapLocation":TDV.Tour.Script.setMapLocation,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getMediaByName":TDV.Tour.Script.getMediaByName,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"registerKey":TDV.Tour.Script.registerKey,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"openLink":TDV.Tour.Script.openLink,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"cloneBindings":TDV.Tour.Script.cloneBindings,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"existsKey":TDV.Tour.Script.existsKey,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"quizStart":TDV.Tour.Script.quizStart,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPixels":TDV.Tour.Script.getPixels,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility},"layout":"absolute","hash": "3bfb3b1e3d5fdd88d60ac37d1105cf184e58e7bbb959d3bed916509aa24a1dfa", "definitions": [{"id":"WebFrame_B77CE4EA_A77E_4A80_41C2_B2291D10E597","data":{"name":"WebFrame"},"backgroundColor":["#FFFFFF"],"url":trans('WebFrame_B77CE4EA_A77E_4A80_41C2_B2291D10E597.url'),"top":"0.07%","width":"99.955%","minHeight":1,"backgroundColorRatios":[0],"height":"99.931%","minWidth":1,"propagateClick":false,"class":"WebFrame","left":"0.04%"},{"id":"mainPlayList","class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_2DDC92C7_22A0_7F18_4199_33F1BD77C705_camera","media":"this.panorama_2DDC92C7_22A0_7F18_4199_33F1BD77C705","class":"PanoramaPlayListItem"}]},{"id":"panorama_2DDC92C7_22A0_7F18_4199_33F1BD77C705","label":trans('panorama_2DDC92C7_22A0_7F18_4199_33F1BD77C705.label'),"hfovMax":130,"vfov":180,"data":{"label":"Lyt3"},"hfovMin":"150%","class":"Panorama","hfov":360,"frames":[{"thumbnailUrl":"media/panorama_2DDC92C7_22A0_7F18_4199_33F1BD77C705_t.webp","class":"CubicPanoramaFrame","cube":{"levels":[{"height":2048,"class":"TiledImageResourceLevel","rowCount":4,"colCount":24,"url":"media/panorama_2DDC92C7_22A0_7F18_4199_33F1BD77C705_0/{face}/0/{row}_{column}.webp","tags":"ondemand","width":12288},{"height":1024,"class":"TiledImageResourceLevel","rowCount":2,"colCount":12,"url":"media/panorama_2DDC92C7_22A0_7F18_4199_33F1BD77C705_0/{face}/1/{row}_{column}.webp","tags":"ondemand","width":6144},{"height":512,"class":"TiledImageResourceLevel","rowCount":1,"colCount":6,"url":"media/panorama_2DDC92C7_22A0_7F18_4199_33F1BD77C705_0/{face}/2/{row}_{column}.webp","tags":["ondemand","preload"],"width":3072}],"class":"ImageResource"}}],"thumbnailUrl":"media/panorama_2DDC92C7_22A0_7F18_4199_33F1BD77C705_t.webp","overlays":["this.overlay_2C66C4DC_22A1_9B28_4195_B290B42ECCBA"]},{"id":"MainViewer","subtitlesTextShadowOpacity":1,"progressBorderSize":0,"data":{"name":"Main Viewer"},"playbackBarHeadShadowOpacity":0.7,"progressBorderRadius":2,"progressLeft":"33%","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"playbackBarBackgroundOpacity":1,"toolTipFontFamily":"Arial","playbackBarProgressBorderColor":"#000000","subtitlesBottom":50,"playbackBarHeadBorderRadius":0,"toolTipShadowColor":"#333138","toolTipPaddingBottom":4,"subtitlesFontColor":"#FFFFFF","width":"100%","playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"subtitlesTop":0,"minHeight":50,"height":"100%","surfaceReticleColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","subtitlesTextShadowVerticalLength":1,"minWidth":100,"toolTipBorderColor":"#767676","propagateClick":false,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadowBlurRadius":3,"toolTipPaddingRight":6,"subtitlesFontSize":"3vmin","playbackBarLeft":0,"playbackBarHeadHeight":15,"subtitlesTextShadowHorizontalLength":1,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipTextShadowColor":"#000000","progressRight":"33%","vrPointerColor":"#FFFFFF","progressOpacity":0.7,"playbackBarHeadShadow":true,"progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","progressBackgroundColorRatios":[0],"playbackBarBottom":5,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","toolTipPaddingLeft":6,"playbackBarBackgroundColor":["#FFFFFF"],"progressBackgroundColor":["#000000"],"toolTipPaddingTop":4,"playbackBarHeight":10,"vrPointerSelectionColor":"#FF6600","progressBottom":10,"vrThumbstickRotationStep":20,"toolTipFontColor":"#606060","playbackBarHeadWidth":6,"subtitlesGap":0,"playbackBarProgressBorderSize":0,"subtitlesBackgroundColor":"#000000","playbackBarBackgroundColorDirection":"vertical","progressHeight":2,"vrPointerSelectionTime":2000,"playbackBarRight":0,"subtitlesFontFamily":"Arial","playbackBarProgressBorderRadius":0,"click":"this.WebFrame_A897103A_A73A_4980_41C0_3C6E26D65ABD.set('url', this.translate('PopupWebFrameBehaviour_B710CE16_A77B_D980_419D_F3F8C384715E.url')); this.showWindow(this.window_B7119E15_A77B_D980_41D1_A448F9851C75, null, false)","progressBarBorderRadius":2,"playbackBarProgressBackgroundColor":["#3399FF"],"class":"ViewerArea","toolTipFontSize":"1.11vmin","firstTransitionDuration":0,"progressBarBorderSize":0},{"id":"window_33CFE95B_2360_8D28_41BC_79DDC5581A31","footerBackgroundColorDirection":"vertical","titleFontColor":"#000000","veilOpacity":0.4,"headerBackgroundColorDirection":"vertical","headerBorderColor":"#000000","backgroundColor":[],"data":{"name":"Window6007"},"shadowOpacity":0.5,"bodyBorderColor":"#000000","headerPaddingLeft":10,"closeButtonRollOverBackgroundColor":[],"closeButtonPressedBorderSize":0,"shadowSpread":1,"closeButtonIconColor":"#B2B2B2","shadowVerticalLength":0,"verticalAlign":"middle","footerHeight":5,"closeButtonBackgroundColor":[],"closeButtonIconHeight":20,"modal":true,"horizontalAlign":"center","closeButtonRollOverBorderColor":"#000000","headerVerticalAlign":"middle","closeButtonPressedIconLineWidth":3,"layout":"vertical","headerBorderSize":0,"closeButtonIconWidth":20,"closeButtonBorderSize":0,"veilColor":["#000000","#000000"],"width":"90%","titleFontFamily":"Arial","bodyPaddingTop":0,"minHeight":0,"veilHideEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeOutEffect"},"bodyBackgroundColorDirection":"vertical","veilColorDirection":"horizontal","height":"90%","scrollBarMargin":2,"backgroundColorRatios":[],"closeButtonRollOverBorderSize":0,"shadowHorizontalLength":3,"titlePaddingRight":5,"propagateClick":false,"minWidth":0,"titlePaddingTop":5,"bodyPaddingBottom":0,"closeButtonPaddingLeft":0,"closeButtonBorderRadius":11,"gap":10,"closeButtonPressedIconColor":"#FFFFFF","closeButtonPaddingRight":0,"shadowColor":"#000000","bodyBackgroundOpacity":0,"headerBackgroundColorRatios":[0,0.09803921568627451,1],"closeButtonBackgroundColorRatios":[],"closeButtonBackgroundOpacity":0,"headerPaddingTop":10,"borderRadius":5,"veilColorRatios":[0,1],"bodyPaddingRight":0,"veilShowEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeInEffect"},"headerPaddingRight":0,"closeButtonRollOverBackgroundOpacity":0,"closeButtonIconLineWidth":2,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"footerBorderColor":"#000000","closeButtonPressedBackgroundOpacity":0,"footerBackgroundOpacity":0,"scrollBarColor":"#000000","closeButtonPaddingTop":0,"titleHorizontalAlign":"left","titlePaddingBottom":5,"bodyBackgroundColorRatios":[0,0.5019607843137255,1],"closeButtonPressedBackgroundColor":[],"titlePaddingLeft":5,"headerPaddingBottom":5,"titleFontSize":"1.29vmin","footerBorderSize":0,"closeButtonBorderColor":"#000000","closeButtonPaddingBottom":0,"closeButtonRollOverIconColor":"#FFFFFF","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonRollOverIconLineWidth":2,"bodyPaddingLeft":0,"bodyBorderSize":0,"footerBackgroundColorRatios":[0,0.8980392156862745,1],"shadow":true,"closeButtonPressedBackgroundColorRatios":[],"hideEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeOutEffect"},"headerBackgroundOpacity":0,"closeButtonPressedBorderColor":"#000000","class":"Window","bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"overflow":"scroll","showEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeInEffect"},"children":["this.WebFrame_A891B03B_A73A_4980_41D6_B6FC9C56154F"],"closeButtonRollOverBackgroundColorRatios":[]},{"id":"window_B7119E15_A77B_D980_41D1_A448F9851C75","footerBackgroundColorDirection":"vertical","titleFontColor":"#000000","veilOpacity":0.4,"headerBackgroundColorDirection":"vertical","backgroundColor":[],"data":{"name":"Window11250"},"shadowOpacity":0.5,"bodyBorderColor":"#000000","headerPaddingLeft":10,"closeButtonRollOverBackgroundColor":[],"closeButtonPressedBorderSize":0,"shadowSpread":1,"closeButtonIconColor":"#B2B2B2","shadowVerticalLength":0,"verticalAlign":"middle","headerBorderColor":"#000000","footerHeight":5,"closeButtonBackgroundColor":[],"closeButtonIconHeight":20,"modal":true,"horizontalAlign":"center","closeButtonRollOverBorderColor":"#000000","headerVerticalAlign":"middle","closeButtonPressedIconLineWidth":3,"layout":"vertical","headerBorderSize":0,"closeButtonIconWidth":20,"closeButtonBorderSize":0,"veilColor":["#000000","#000000"],"width":"90%","titleFontFamily":"Arial","bodyPaddingTop":0,"minHeight":0,"veilHideEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeOutEffect"},"bodyBackgroundColorDirection":"vertical","veilColorDirection":"horizontal","height":"90%","scrollBarMargin":2,"backgroundColorRatios":[],"closeButtonRollOverBorderSize":0,"shadowHorizontalLength":3,"titlePaddingRight":5,"propagateClick":false,"minWidth":0,"titlePaddingTop":5,"bodyPaddingBottom":0,"closeButtonPaddingLeft":0,"closeButtonBorderRadius":11,"gap":10,"closeButtonPressedIconColor":"#FFFFFF","closeButtonPaddingRight":0,"shadowColor":"#000000","bodyBackgroundOpacity":0,"headerBackgroundColorRatios":[0,0.09803921568627451,1],"closeButtonBackgroundColorRatios":[],"closeButtonBackgroundOpacity":0,"headerPaddingTop":10,"borderRadius":5,"veilColorRatios":[0,1],"bodyPaddingRight":0,"veilShowEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeInEffect"},"headerPaddingRight":0,"closeButtonRollOverBackgroundOpacity":0,"closeButtonIconLineWidth":2,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"footerBorderColor":"#000000","closeButtonPressedBackgroundOpacity":0,"footerBackgroundOpacity":0,"scrollBarColor":"#000000","closeButtonPaddingTop":0,"titleHorizontalAlign":"left","titlePaddingBottom":5,"bodyBackgroundColorRatios":[0,0.5019607843137255,1],"closeButtonPressedBackgroundColor":[],"titlePaddingLeft":5,"headerPaddingBottom":5,"titleFontSize":"1.29vmin","footerBorderSize":0,"closeButtonBorderColor":"#000000","closeButtonPaddingBottom":0,"closeButtonRollOverIconColor":"#FFFFFF","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonRollOverIconLineWidth":2,"bodyPaddingLeft":0,"closeButtonPressedBorderColor":"#000000","footerBackgroundColorRatios":[0,0.8980392156862745,1],"shadow":true,"closeButtonPressedBackgroundColorRatios":[],"hideEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeOutEffect"},"headerBackgroundOpacity":0,"bodyBorderSize":0,"class":"Window","bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"overflow":"scroll","showEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeInEffect"},"children":["this.WebFrame_A897103A_A73A_4980_41C0_3C6E26D65ABD"],"closeButtonRollOverBackgroundColorRatios":[]},{"id":"panorama_2DDC92C7_22A0_7F18_4199_33F1BD77C705_camera","class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"enterPointingToHorizon":true,"initialSequence":"this.sequence_2FBF9C20_22A0_8B18_41B8_A6F54BB19269"},{"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","aaEnabled":true,"mouseControlMode":"drag_rotation","keepModel3DLoadedWithoutLocation":true,"displayPlaybackBar":true,"arrowKeysAction":"translate"},{"id":"overlay_2C66C4DC_22A1_9B28_4195_B290B42ECCBA","class":"HotspotPanoramaOverlay","maps":[],"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"pitch":26.12,"vfov":10.21,"hfov":32.38,"yaw":158.31,"data":{"label":"Polygon"},"image":{"levels":[{"height":163,"class":"ImageResourceLevel","url":"media/panorama_2DDC92C7_22A0_7F18_4199_33F1BD77C705_HS_6k3nqquv.webp","width":532}],"class":"ImageResource"}}],"areas":["this.HotspotPanoramaOverlayArea_2D9FE514_22A1_853F_4184_2183D093B0B4"],"data":{"label":"Polygon"},"useHandCursor":true,"rollOverDisplay":true},{"id":"WebFrame_A891B03B_A73A_4980_41D6_B6FC9C56154F","data":{"name":"WebFrame13746"},"backgroundColor":[],"url":trans('WebFrame_A891B03B_A73A_4980_41D6_B6FC9C56154F.url'),"width":"100%","minHeight":0,"backgroundColorRatios":[],"height":"100%","minWidth":0,"propagateClick":false,"class":"WebFrame"},{"id":"WebFrame_A897103A_A73A_4980_41C0_3C6E26D65ABD","data":{"name":"WebFrame13745"},"backgroundColor":[],"url":trans('WebFrame_A897103A_A73A_4980_41C0_3C6E26D65ABD.url'),"width":"100%","minHeight":0,"backgroundColorRatios":[],"height":"100%","minWidth":0,"propagateClick":false,"class":"WebFrame"},{"id":"sequence_2FBF9C20_22A0_8B18_41B8_A6F54BB19269","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}]},{"id":"HotspotPanoramaOverlayArea_2D9FE514_22A1_853F_4184_2183D093B0B4","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"image","click":"this.WebFrame_A891B03B_A73A_4980_41D6_B6FC9C56154F.set('url', this.translate('PopupWebFrameBehaviour_33CD595D_2360_8D28_41BD_CE980FBC1EA8.url')); this.showWindow(this.window_33CFE95B_2360_8D28_41BC_79DDC5581A31, null, false)"}],"defaultMenu":["fullscreen","mute","rotation"],"watermark":false,"start":"this.init()","width":"100%","minHeight":0,"backgroundColorRatios":[0],"height":"100%","scrollBarMargin":2,"minWidth":0,"propagateClick":false,"class":"Player","scrollBarColor":"#000000"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.23, Mon Jun 8 2026