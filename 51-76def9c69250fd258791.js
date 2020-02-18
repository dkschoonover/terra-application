(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{842:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=l(t(0)),a=l(t(1)),r=l(t(3)),d=l(t(843));function l(e){return e&&e.__esModule?e:{default:e}}var s=r.default.bind(d.default),i={rows:a.default.arrayOf(a.default.shape({name:a.default.string,type:a.default.func,required:a.default.bool,defaultValue:a.default.string,description:a.default.func}))},p=function(e){var n=e.rows;return o.default.createElement("table",{className:s("table")},o.default.createElement("thead",null,o.default.createElement("tr",{className:s("tr")},o.default.createElement("th",{className:s("th")},"Prop Name"),o.default.createElement("th",{className:s("th")},"Type"),o.default.createElement("th",{className:s("th")},"Is Required"),o.default.createElement("th",{className:s("th")},"Default Value"),o.default.createElement("th",{className:s("th")},"Description"))),o.default.createElement("tbody",null,n.map((function(e){return o.default.createElement("tr",{className:s(["tr","props-tr"]),key:e.name},o.default.createElement("td",{className:s(["td","strong","props-td"])},e.name),o.default.createElement("td",{className:s(["td","props-td"])},e.type()),o.default.createElement("td",{className:s(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),o.default.createElement("td",{className:s(["td","props-td"])},e.defaultValue),o.default.createElement("td",{className:s(["td","props-td"])},e.description()))}))))};p.propTypes=i;var c=p;n.default=c},843:function(e,n,t){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},920:function(e,n,t){"use strict";t.r(n);var o=t(14),a=t.n(o),r=t(23),d=t.n(r),l=(t(0),t(275)),s=t(842),i=t.n(s),p=function(){return Object(l.mdx)(i.a,{rows:[{name:"children",type:function(){var e={};function n(n){var t=n.components,o=d()(n,["components"]);return Object(l.mdx)("wrapper",a()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=d()(n,["components"]);return Object(l.mdx)("wrapper",a()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The components to be rendered in the body of the ModalManager. These components will receive the\ndisclosure capabilities through the DisclosureManger's context API."))}return n.isMDXComponent=!0,n({})}},{name:"disclosureAccessory",type:function(){var e={};function n(n){var t=n.components,o=d()(n,["components"]);return Object(l.mdx)("wrapper",a()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"element"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=d()(n,["components"]);return Object(l.mdx)("wrapper",a()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The component to render within the Modal above the disclosed content."))}return n.isMDXComponent=!0,n({})}},{name:"navigationPromptResolutionOptions",type:function(){var e={};function n(n){var t=n.components,o=d()(n,["components"]);return Object(l.mdx)("wrapper",a()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"custom"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=d()(n,["components"]);return Object(l.mdx)("wrapper",a()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The Object (or function that returns an Object) that specifies the messages\nused to prompt the user when disclosure dismissal occurs when pending state\nis present. If not provided, the default messaging will be used."))}return n.isMDXComponent=!0,n({})}}]})};t.d(n,"default",(function(){return m}));var c={};function m(e){var n=e.components,t=d()(e,["components"]);return Object(l.mdx)("wrapper",a()({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"modalmanager"},"ModalManager"),Object(l.mdx)("p",null,"The ModalManager exposes its children to modal presentation APIs through the\n",Object(l.mdx)("a",a()({parentName:"p"},{href:"/terra-application/components/terra-application/application/reference/contexts/disclosure-manager-context"}),"DisclosureManagerContext"),"."),Object(l.mdx)("h2",{id:"usage"},"Usage"),Object(l.mdx)("pre",null,Object(l.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"import ModalManager from 'terra-application/lib/modal-manager';\n")),Object(l.mdx)("h2",{id:"props"},"Props"),Object(l.mdx)(p,{mdxType:"PropsTable"}),Object(l.mdx)("h2",{id:"features"},"Features"),Object(l.mdx)("h3",{id:"exception-handling"},"Exception Handling"),Object(l.mdx)("p",null,"ModalManager renders an ",Object(l.mdx)("a",a()({parentName:"p"},{href:"/terra-application/components/terra-application/application/reference/components/application-error-boundary"}),"ApplicationErrorBoundary"),"\naround its disclosed components. If the disclosed components throw exceptions during React lifecycle functions, ModalManager will\ncatch the exceptions and render a styled error component in place of the children."),Object(l.mdx)("blockquote",null,Object(l.mdx)("p",{parentName:"blockquote"},"If the disclosed modal contents do not utilize the DisclosureManagerHeaderAdapter and render their own modal header instead,\nit is recommended that those components render an additional ApplicationErrorBoundary below their modal header to keep the\nheader controls for modal dismissal exposed.")),Object(l.mdx)("h3",{id:"loading-overlays"},"Loading Overlays"),Object(l.mdx)("p",null,"ModalManager renders an ",Object(l.mdx)("a",a()({parentName:"p"},{href:"/terra-application/components/terra-application/application/reference/components/application-loading-overlay"}),"ApplicationLoadingOverlayProvider"),"\naround its disclosed components. Any ",Object(l.mdx)("a",a()({parentName:"p"},{href:"/terra-application/components/terra-application/application/reference/components/application-loading-overlay"}),"ApplicationLoadingOverlay"),"\ncomponents rendered by children will cause a loading overlay to be rendered over the modal's contents."),Object(l.mdx)("blockquote",null,Object(l.mdx)("p",{parentName:"blockquote"},"If the disclosed modal contents do not utilize the DisclosureManagerHeaderAdapter and render their own modal header instead,\nit is recommended that those components render an additional ApplicationLoadingOverlayProvider below their modal header to keep\nthe header controls for modal dismissal exposed while the overlay is active.")),Object(l.mdx)("h3",{id:"unsaved-changes"},"Unsaved Changes"),Object(l.mdx)("p",null,"ModalManager monitors its disclosed content for the presence of rendered ",Object(l.mdx)("a",a()({parentName:"p"},{href:"/terra-application/components/terra-application/application/reference/components/navigation-prompt"}),"NavigationPrompts"),"\nwithin its disclosed content. ModalManager will ensure that the user is prompted prior to dismissing the presented modal if any\n",Object(l.mdx)("a",a()({parentName:"p"},{href:"/terra-application/components/terra-application/application/reference/components/navigation-prompt"}),"NavigationPrompts")," are rendered at the time of the dismissal request."),Object(l.mdx)("h2",{id:"details"},"Details"),Object(l.mdx)("h3",{id:"implementation-requirements"},"Implementation Requirements"),Object(l.mdx)("p",null,"The ModalManager utilizes the ",Object(l.mdx)("a",a()({parentName:"p"},{href:"/terra-application/components/terra-application/application/reference/contexts/disclosure-manager-context"}),"DisclosureManagerContext")," to manage disclosure requests."),Object(l.mdx)("p",null,"The ModalManager responds to ",Object(l.mdx)("inlineCode",{parentName:"p"},'"modal"')," disclosure type requests. Components that wish to disclose content using the ModalManager\nshould provide a preferred type of ",Object(l.mdx)("inlineCode",{parentName:"p"},'"modal"'),"."),Object(l.mdx)("h3",{id:"disclosuremanagerheaderadapter-support"},"DisclosureManagerHeaderAdapter Support"),Object(l.mdx)("p",null,"If a component disclosed by the ModalManager renders a ",Object(l.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter"),", the ModalManager will render an ActionHeader\nand provide the standard disclosure navigation controls (close, go back, maximize/minimize, etc.) within it. The disclosed component\ncan use the ",Object(l.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter")," to inject its own title and CollapsibleButtonView into the ActionHeader."),Object(l.mdx)("p",null,"If the disclosed component does ",Object(l.mdx)("strong",{parentName:"p"},"not")," render a ",Object(l.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter"),", the ModalManager will ",Object(l.mdx)("strong",{parentName:"p"},"not")," render an ActionHeader itself.\nIn this case, it is assumed that the disclosed component is rendering its own header. The disclosed component is responsible for rendering\nthe appropriate controls to navigate the disclosure stack."),Object(l.mdx)("blockquote",null,Object(l.mdx)("p",{parentName:"blockquote"},"Note: The DisclosureManagerHeaderAdapter is the preferred way to present a header within the ModalManager.\nIn a future major release, the ModalManager will ",Object(l.mdx)("strong",{parentName:"p"},"always")," render the header and navigation controls, regardless of the presence of a DisclosureManagerHeaderAdapter.")),Object(l.mdx)("h3",{id:"disclosure-accessory"},"Disclosure Accessory"),Object(l.mdx)("p",null,"The ",Object(l.mdx)("inlineCode",{parentName:"p"},"disclosureAccessory")," prop allows consumers of the ModalManager to render a static component above the disclosed modal content.\nThe provided component will be rendered below the standard ActionHeader and above the disclosed content. This can be used to easily\nprovide additional context to every disclosed component. This component is provided once to the ModalManager instance, not on a per-disclosure basis,\nand each component in the disclosure stack will be decorated with the same accessory component."),Object(l.mdx)("h3",{id:"example"},"Example"),Object(l.mdx)("pre",null,Object(l.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Button from 'terra-button';\nimport ModalManager, { disclosureType } from 'terra-application/lib/modal-manager';\nimport { withDisclosureManager, DisclosureManagerContext, DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';\nimport CollapsibleMenuView from 'terra-collapsible-menu-view';\n\nconst ModalComponentB = () => (\n  <React.Fragment>\n    <DisclosureManagerHeaderAdapter\n      title=\"Modal Component B\"\n    />\n    <p>I am ModalComponentB!</p>\n  </React.Fragment>\n);\n\nconst ModalComponentA = () => {\n  const disclosureManager = React.useContext(DisclosureManagerContext);\n\n  return (\n    <div>\n      <DisclosureManagerHeaderAdapter\n        title=\"Modal Component A\"\n        collapsibleMenuView={<CollapsibleMenuView />}\n      />\n      <p>I am ModalComponentA!</p>\n      <Button\n        text=\"Disclose ModalComponentB\"\n        onClick={() => {\n          disclosureManager.disclose({\n            preferredType: 'modal',\n            size: 'large',\n            content: {\n              key: 'modal-component-b-instance',\n              component: <ModalComponentB />\n            }\n          });\n        }}\n      />\n    </div>\n  );\n}\n\nconst MyContentComponent = withDisclosureManager(({ disclosureManager }) => (\n  <div>\n    <p>I am MyContentComponent!</p>\n    <Button\n      text=\"Disclose ModalComponentA\"\n      onClick={() => {\n        disclosureManager.disclose({\n          preferredType: 'modal',\n          size: 'large',\n          content: {\n            key: 'modal-component-a-instance',\n            component: <ModalComponentA />\n          }\n        });\n      }}\n    />\n  </div>\n));\n\nMyContentComponent.propTypes = {\n  disclosureManager: disclosureManagerShape,\n}\n\nconst MyModalManagerComponent = () => (\n  <ModalManager\n    disclosureAccessory={<div>Disclosure Accessory</div>}\n  >\n    <MyContentComponent />\n  </ModalManager>\n);\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=51-76def9c69250fd258791.js.map