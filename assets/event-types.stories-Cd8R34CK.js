import{j as e}from"./index-D7BLJ8bQ.js";import{S as a,D as i,W as n,a as c,M as d}from"./month-view-CD5yLp24.js";import{d as w,b as S,c as k}from"./dataSource-Dz6PBnm9.js";/* empty css               */import"./index-BCtMShv3.js";import"./index-D-fs5e6L.js";const y=({})=>{const s={dataSource:w,fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}};return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"schedule-control",children:e.jsxs(a,{height:"550px",width:"100%",selectedDate:new Date(2017,10,1),currentView:"Month",eventSettings:s,children:[e.jsx(i,{}),e.jsx(n,{}),e.jsx(c,{}),e.jsx(d,{})]})})})},D=({})=>{const s={dataSource:S.slice(0,14),fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}};return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"schedule-control",children:e.jsxs(a,{height:"550px",width:"100%",selectedDate:new Date(2017,10,1),currentView:"Month",eventSettings:s,showQuickInfoPopup:!1,children:[e.jsx(i,{}),e.jsx(n,{}),e.jsx(c,{}),e.jsx(d,{})]})})})},E=({})=>{const s={dataSource:k,fields:{id:"id",subject:"subject",startTime:"startTime",endTime:"endTime",isAllDay:"isAllDay",location:"location",description:"description",isBlock:"isBlock",isReadonly:"isReadonly"}};return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"schedule-control",children:e.jsxs(a,{height:"550px",width:"100%",selectedDate:new Date(2025,6,14),currentView:"Month",eventSettings:s,children:[e.jsx(i,{}),e.jsx(n,{}),e.jsx(c,{}),e.jsx(d,{})]})})})},I={title:"Schedule/Event Types",parameters:{layout:"padded",docs:{description:{component:"Meta configuration for the Storybook stories"}}},tags:["autodocs"]},t={render:s=>e.jsx(y,{...s}),args:{height:"550px",width:"100%",viewType:"WeekView"}},o={render:s=>e.jsx(D,{...s}),args:{height:"550px",width:"100%",viewType:"WeekView"}},r={render:s=>e.jsx(E,{...s}),args:{}};var l,m,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <NormalEventsSample {...args} />,
  args: {
    height: '550px',
    width: '100%',
    viewType: 'WeekView'
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,u,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <BlockEventsSample {...args} />,
  args: {
    height: '550px',
    width: '100%',
    viewType: 'WeekView'
  }
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var j,g,v;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <CombinedEventsSample {...args} />,
  args: {}
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const W=["NormalEvents","BlockEvents","CombinedEvents"];export{o as BlockEvents,r as CombinedEvents,t as NormalEvents,W as __namedExportsOrder,I as default};
