document.getElementById('header-button').addEventListener('click', function () {
  const headerText = document.getElementById('penguin-id');
  headerText.innerText = 'I am penguin';
  console.log(headerText);
});
