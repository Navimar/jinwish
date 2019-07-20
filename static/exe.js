import { loadavg } from "os";

let onSelect = (txt) => {
    // update();
    save();
    select(txt);
    send();
    render();
};

let onTag = (txt) => {
    // update();
    save();
    select(txt);
    send();
    render();
}

let onOpn = (txt) => {
    // update();
    save();
    select(txt);
    send();
    render();
}

let onNew = () => {
    // update();
    save();
    newwish('новая запись',false,false,false,'first');
    select('новая запись');
    send();
    render();
}

let onDel = (txt) => {
    // update();
    selectnext();
    del(txt);
    send();
    render();
}

let onFocus =()=>{
    update()
}
let onToday = () => {
    let d = moment();
    $('#date').val(d.format('YYYY-MM-DD'));
}

let onPlusday = () => {
    let d = moment($('#date').val()).add(1, 'day');
    $('#date').val(d.format('YYYY-MM-DD'));
}

let onTomorrow = () => {
    onToday();
    onPlusday();
}


let onPlusHour = () => {
    let d = moment($('#date').val() + 'T' + $('#time').val()).add(1, 'hour');
    $('#date').val(d.format('YYYY-MM-DD'));
    $('#time').val(d.format('HH:mm'));
}

let onNow = () => {
    let d = moment();
    $('#date').val(d.format('YYYY-MM-DD'));
    $('#time').val(d.format('HH:mm'));
}
let onPlus15 = () => {
    let d = moment($('#date').val() + 'T' + $('#time').val()).add(15, 'minute');
    $('#date').val(d.format('YYYY-MM-DD'));
    $('#time').val(d.format('HH:mm'));
}

let onPlusWeek = () => {
    let d = moment($('#date').val()).add(7, 'day');
    $('#date').val(d.format('YYYY-MM-DD'));
}

