(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{836:function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.messages=a.locale=a.areTranslationsLoaded=void 0;var t,n=r(6),i=r(851),o=(t=i)&&t.__esModule?t:{default:t};(0,n.addLocaleData)(o.default);a.areTranslationsLoaded=!0,a.locale="nl",a.messages={"Terra.AbstractModal.BeginModalDialog":"Begin de modale dialoog","Terra.AbstractModal.EndModalDialog":"Modale dialoog beëindigen","Terra.actionHeader.back":"Terug","Terra.actionHeader.close":"Sluiten","Terra.actionHeader.maximize":"Maximalisatie","Terra.actionHeader.minimize":"Minimaliseren","Terra.actionHeader.next":"Volgende","Terra.actionHeader.previous":"Vorige","Terra.ajax.error":"Deze inhoud kon niet worden geladen.","Terra.applicationNavigation.drawerMenu.navigation":"Navigatie-items","Terra.applicationNavigation.drawerMenu.utilities":"Hulp-items","Terra.applicationNavigation.extensions.rollupButtonDescription":"Additional Tools","Terra.applicationNavigation.extensions.rollupMenuHeaderTitle":"Additional Tools","Terra.applicationNavigation.header.menuButtonTitle":"Menu","Terra.applicationNavigation.header.skipToContentTitle":"Doorgaan naar content","Terra.applicationNavigation.header.utilityButtonTitleNoUser":"Opties","Terra.applicationNavigation.header.utilityButtonTitleUser":"Gebruikersinstellingen","Terra.applicationNavigation.notifications.new":"Nieuw","Terra.applicationNavigation.tabs.rollupButtonDescription":"Meer navigatie","Terra.applicationNavigation.tabs.rollupButtonTitle":"Meer","Terra.applicationNavigation.tabs.rollupMenuHeaderTitle":"Meer navigatie","Terra.applicationNavigation.utilityMenu.headerTitle":"Hulpprogramma's","Terra.applicationNavigation.utilityMenu.help":"Help","Terra.applicationNavigation.utilityMenu.logout":"Afmelden","Terra.applicationNavigation.utilityMenu.settings":"Instellingen","Terra.collapsibleMenuView.more":"Meer","Terra.devSite.themed.help":"Help","Terra.form.field.optional":"(optioneel)","Terra.form.field.required":"Verplicht","Terra.form.select.add":'"{text}" toevoegen',"Terra.form.select.ariaLabel":"Zoeken","Terra.form.select.clearSelect":"Selectie wissen","Terra.form.select.defaultDisplay":"- Selecteren -","Terra.form.select.defaultUsageGuidance":"Gebruik de knoppen Pijl-omhoog en Pijl-omlaag om de opties te bekijken. Druk op Enter om een optie te selecteren.","Terra.form.select.dimmed":"Gedimd.","Terra.form.select.disabled":"Gedeactiveerd.","Terra.form.select.listOfTotalOptions":"Lijst van {total} opties.","Terra.form.select.maxSelectionHelp":"Limiet: {text} items.","Terra.form.select.maxSelectionOption":"Maximumaantal van {text} items geselecteerd","Terra.form.select.menu":"Menu","Terra.form.select.mobileButtonUsageGuidance":"Tik om naar opties te gaan.","Terra.form.select.mobileUsageGuidance":"Veeg naar rechts om naar opties te gaan.","Terra.form.select.multiSelectUsageGuidance":"Voer tekst in of gebruik de knoppen Pijl-omhoog en Pijl-omlaag om de opties te bekijken. Druk op Enter om een optie te selecteren of te deselecteren.","Terra.form.select.noResults":'Geen resultaten gevonden voor "{text}"',"Terra.form.select.optGroup":"Groeperen {text}","Terra.form.select.option":"Opties","Terra.form.select.searchUsageGuidance":"Voer tekst in of gebruik de knoppen Pijl-omhoog en Pijl-omlaag om de opties te bekijken. Druk op Enter om een optie te selecteren.","Terra.form.select.selectCleared":"Geselecteerde waarde gewist","Terra.form.select.selected":"Geselecteerd.","Terra.form.select.selectedText":"{text} geselecteerd","Terra.form.select.unselected":"Gedeselecteerd.","Terra.form.select.unselectedText":"{text} niet geselecteerd.","Terra.icon.IconConsultInstructionsForUse.title":"Pictogram Elektronische gebruiksaanwijzing","Terra.InfiniteList.loading":"Bezig met laden","Terra.menu.back":"Terug","Terra.menu.close":"Sluiten","Terra.notification.dialog.alert":"Waarschuwing","Terra.notification.dialog.error":"Fout","Terra.notification.dialog.info":"Informatie","Terra.notification.dialog.success":"Succes","Terra.notification.dialog.warning":"Waarschuwing","Terra.Overlay.loading":"Bezig met laden","Terra.popup.header.close":"Sluiten","Terra.searchField.clear":"Wissen","Terra.searchField.search":"Zoeken","Terra.searchField.submit-search":"Zoeken","Terra.status-view.error":"Fout","Terra.status-view.no-data":"Geen resultaten","Terra.status-view.no-matching-results":"Geen overeenkomende resultaten","Terra.status-view.not-authorized":"Niet geautoriseerd","terraApplication.unsavedChangesPrompt.acceptButtonText":"Niet opslaan","terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro":"Er zijn niet-opgeslagen wijzigingen in het volgende:","terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro":"De wijzigingen gaan verloren als u ze niet opslaat. Hoe wilt u doorgaan?","terraApplication.unsavedChangesPrompt.rejectButtonText":"Doorgaan met bewerken","terraApplication.unsavedChangesPrompt.singlePromptMessage":"Er zijn niet-opgeslagen wijzigingen in {promptDescription}. De wijzigingen gaan verloren als u ze niet opslaat. Hoe wilt u doorgaan?","terraApplication.unsavedChangesPrompt.title":"Er zijn niet-opgeslagen wijzigingen."}},851:function(e,a,r){e.exports=function(){"use strict";return[{locale:"nl",pluralRuleFunction:function(e,a){var r=!String(e).split(".")[1];return a?"other":1==e&&r?"one":"other"},fields:{year:{displayName:"jaar",relative:{0:"dit jaar",1:"volgend jaar","-1":"vorig jaar"},relativeTime:{future:{one:"over {0} jaar",other:"over {0} jaar"},past:{one:"{0} jaar geleden",other:"{0} jaar geleden"}}},"year-short":{displayName:"jr",relative:{0:"dit jaar",1:"volgend jaar","-1":"vorig jaar"},relativeTime:{future:{one:"over {0} jaar",other:"over {0} jaar"},past:{one:"{0} jaar geleden",other:"{0} jaar geleden"}}},month:{displayName:"maand",relative:{0:"deze maand",1:"volgende maand","-1":"vorige maand"},relativeTime:{future:{one:"over {0} maand",other:"over {0} maanden"},past:{one:"{0} maand geleden",other:"{0} maanden geleden"}}},"month-short":{displayName:"mnd",relative:{0:"deze maand",1:"volgende maand","-1":"vorige maand"},relativeTime:{future:{one:"over {0} maand",other:"over {0} maanden"},past:{one:"{0} maand geleden",other:"{0} maanden geleden"}}},day:{displayName:"dag",relative:{0:"vandaag",1:"morgen",2:"overmorgen","-2":"eergisteren","-1":"gisteren"},relativeTime:{future:{one:"over {0} dag",other:"over {0} dagen"},past:{one:"{0} dag geleden",other:"{0} dagen geleden"}}},"day-short":{displayName:"dag",relative:{0:"vandaag",1:"morgen",2:"overmorgen","-2":"eergisteren","-1":"gisteren"},relativeTime:{future:{one:"over {0} dag",other:"over {0} dgn"},past:{one:"{0} dag geleden",other:"{0} dgn geleden"}}},hour:{displayName:"uur",relative:{0:"binnen een uur"},relativeTime:{future:{one:"over {0} uur",other:"over {0} uur"},past:{one:"{0} uur geleden",other:"{0} uur geleden"}}},"hour-short":{displayName:"uur",relative:{0:"binnen een uur"},relativeTime:{future:{one:"over {0} uur",other:"over {0} uur"},past:{one:"{0} uur geleden",other:"{0} uur geleden"}}},minute:{displayName:"minuut",relative:{0:"binnen een minuut"},relativeTime:{future:{one:"over {0} minuut",other:"over {0} minuten"},past:{one:"{0} minuut geleden",other:"{0} minuten geleden"}}},"minute-short":{displayName:"min",relative:{0:"binnen een minuut"},relativeTime:{future:{one:"over {0} min.",other:"over {0} min."},past:{one:"{0} min. geleden",other:"{0} min. geleden"}}},second:{displayName:"seconde",relative:{0:"nu"},relativeTime:{future:{one:"over {0} seconde",other:"over {0} seconden"},past:{one:"{0} seconde geleden",other:"{0} seconden geleden"}}},"second-short":{displayName:"sec",relative:{0:"nu"},relativeTime:{future:{one:"over {0} sec.",other:"over {0} sec."},past:{one:"{0} sec. geleden",other:"{0} sec. geleden"}}}}},{locale:"nl-AW",parentLocale:"nl"},{locale:"nl-BE",parentLocale:"nl"},{locale:"nl-BQ",parentLocale:"nl"},{locale:"nl-CW",parentLocale:"nl"},{locale:"nl-SR",parentLocale:"nl"},{locale:"nl-SX",parentLocale:"nl"}]}()}}]);
//# sourceMappingURL=nl-translations-07ea495bd26aa3dfd2fc.js.map