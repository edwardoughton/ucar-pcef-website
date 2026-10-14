const joinForm = document.querySelector('#join-form');
const travelSelect = document.querySelector('#travel-support');
const travelDetails = document.querySelector('#travel-details');
const justification = document.querySelector('#travel-justification');

function updateTravelFields() {
  const requested = travelSelect.value === 'Yes';
  travelDetails.hidden = !requested;
  justification.disabled = !requested;
  justification.required = requested;
}

travelSelect.addEventListener('change', updateTravelFields);
updateTravelFields();

joinForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!joinForm.reportValidity()) return;
  const data = new FormData(joinForm);
  const name = data.get('name').trim();
  const email = data.get('email').trim();
  const organization = data.get('organization').trim();
  const reason = (data.get('justification') || '').trim();
  if (!name || !organization || (travelSelect.value === 'Yes' && !reason)) {
    document.querySelector('#join-status').textContent = 'Please complete all required fields with more than spaces.';
    return;
  }
  const body = [
    'Dear Alice,',
    '',
    'I would like to attend the Virginia Multi-Hazard Workshop on 16 April 2027, 10:00 AM–2:00 PM Eastern, in the Robins Room at Lewis Ginter Botanical Garden.',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Organization: ${organization}`,
    `Travel funds requested: ${data.get('travel')}`,
    ...(travelSelect.value === 'Yes' ? ['', 'Attendance justification and need for travel support:', reason] : []),
    '',
    'Please let me know about next steps.',
    '',
    'Best wishes,',
    name,
  ].join('\r\n');
  const subject = 'Participation request: Virginia Multi-Hazard Workshop — 16 April 2027';
  window.location.href = `mailto:afox30@gmu.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#join-status').textContent = 'Your email app should open with a draft. Please review and send it. If it does not open, email Alice directly using the address below and include the details from this form.';
});
