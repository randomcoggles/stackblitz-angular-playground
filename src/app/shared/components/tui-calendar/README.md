Ref.:
https://github.com/nhn/tui.ngx-calendar

Schedule Interface: {
  export interface Schedule {
    id: string;
    calendarId: string;
    title: string;
    start: string | Date;
    end: string | Date;
    isAllDay?: boolean;
    category: "milestone" | "task" | "allday" | "time";
    dueDateClass?: string;
    location?: string;
    attendees?: Array<string>;
    recurrenceRule?: any;
    isPending?: boolean;
    isFocused?: boolean;
    isVisible?: boolean;
    isReadOnly?: boolean;
    isPrivate?: boolean;
    color?: string;
    bgColor?: string;
    dragBgColor?: string;
    borderColor?: string;
    customStyle?: string;
    raw?: any;
}
{
attendees: [],
bgColor: "#9e5fff",
body: "",
borderColor: "#9e5fff",
calendarId: "1",
category: "time",
color: "#ffffff",
comingDuration: 0,
customStyle: "",
dragBgColor: "#9e5fff",
dueDateClass: "",
end: Mon Oct 04 2021 03:30:00 GMT-0300 (Brasilia Standard Time) {}
goingDuration: 0
id: "276d9d50-d721-594f-be9e-88c9d1ddcc68"
isAllday: false
isFocused: false
isPending: false
isPrivate: false
isReadOnly: false
isVisible: true
location: "714 Ojkiv Loop"
raw: {memo: "Obu nac memob me fes paza pobfebog hezciv ki rurpo fegotu do ikejeaja wavtemi vab pah.", hasToOrCc: false, hasRecurrenceRule: false, location: null, class: "public", …}
recurrenceRule: ""
start: Mon Oct 04 2021 00:30:00 GMT-0300 (Brasilia Standard Time) {}
state: "Busy"
}


interface ScheduleInfo {
  
attendees: (6) ["Hannah Pierce", "Dora Price", "Edward Cooper", "Hettie Cain", "Katie Coleman", "Jerry Stevenson"]
bgColor: "#9e5fff"
body: ""
borderColor: "#9e5fff"
calendarId: "1"
category: "allday"
color: "#ffffff"
comingDuration: 9
customStyle: ""
dragBgColor: "#9e5fff"
dueDateClass: ""
end: Wed Sep 08 2021 18:30:00 GMT-0300 (Brasilia Standard Time) {}
goingDuration: 9
id: "66ccba3d-4584-5ac0-b976-327e35a3fcab"
isAllday: true
isFocused: false
isPending: false
isPrivate: false
isReadOnly: false
isVisible: true
location: "1238 Lafuj Trail"
raw: {memo: "Botget fo fumsa mu uk uzurod mojez fedegdob ol mujoc jic tifran kinedid jadkebsij.", hasToOrCc: false, hasRecurrenceRule: false, location: null, class: "public", …}
recurrenceRule: ""
start: Sun Sep 05 2021 16:30:00 GMT-0300 (Brasilia Standard Time) {}
state: "Busy"
title: "Fis besaheohu fa."
}