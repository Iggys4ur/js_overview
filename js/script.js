const $saveBtn = $('#save-note');
const $createBtn = $('#create-note');

function createNote(eventObj){
    //eventObj.preventDefault();
    const $titleInput = $('#title-input');
    const $textInput = $('#text-input');
    const $dateInput = $('#date-input');
    const dateStr = $dateInput.val();
    const dateTime = dayjs(dateStr);
    const timeActual = dayjs();

    const test = timeActual.$d;

    test.

    console.log(timeActual);
    console.log($titleInput.val());
    console.log($textInput.val());
    console.log($dateInput.val());
    console.log(dateTime);
    console.log(dateTime.$d);
    console.log(timeActual);
    console.log(timeActual.$d);
}

$saveBtn.on('click', createNote);
$createBtn.on('click', createNote);

$('#date-input').datepicker();