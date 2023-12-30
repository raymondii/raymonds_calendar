$(document).ready(function() {
  const saveButton = $('.saveBtn');

  saveButton.on('click', function() {
    const timeBlocks = $('.time-block');
    const timeBlockId = timeBlocks.attr('id');
  });

  const currentHour = dayjs().format('H');
  const timeBlocks = $('.time-block');

  timeBlocks.each(function() {
    const timeBlockId = $(this).attr('id');
    if (timeBlockId < currentHour) {
      $(this).addClass('past');
    } else if (timeBlockId === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });

  $(document).ready(function() {
    const currentDateTimeElement = $('#currentDateTime');
  
    function updateDateTime() {
      const currentDateTime = new Date();
      const formattedDateTime = currentDateTime.toLocaleString();
      currentDateTimeElement.text(formattedDateTime);
    }
  
    setInterval(updateDateTime, 1000);
  });

  $(document).ready(function() {
    const saveButtons = $('.saveBtn');
  
    saveButtons.on('click', function() {
      const timeBlock = $(this).closest('.time-block');
      const timeBlockId = timeBlock.attr('id');
      const textarea = timeBlock.find('textarea');
      const inputValue = textarea.val();
  
      localStorage.setItem(timeBlockId, inputValue);
    });
  
    const timeBlocks = $('.time-block');
  
    timeBlocks.each(function() {
      const timeBlockId = $(this).attr('id');
      const savedInput = localStorage.getItem(timeBlockId);
      if (savedInput) {
        const textarea = $(this).find('textarea');
        textarea.val(savedInput);
      }
    });
  });

  timeBlocks.each(function() {
    const timeBlockId = $(this).attr('id');
    const savedInput = localStorage.getItem(timeBlockId);
    if (savedInput) {
      const textarea = $(this).find('textarea');
      textarea.val(savedInput);
    }
  });

  const currentDateElement = $('.current-date');
  const currentDate = dayjs().format('MMM D, YYYY');

  currentDateElement.text(currentDate);
});