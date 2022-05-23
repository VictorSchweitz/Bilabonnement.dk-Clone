const dropdownToggle = document.querySelector('#dropdown-toggle')
const dropdownToggleIcon = document.querySelector('.dropdown-toggle i')
const dropdownContent = document.querySelector('.dropdown-content')

// Showing dropdown on toggle hover
dropdownToggle.addEventListener('mouseover', (e) =>
{
   console.log(e.target)
   dropdownContent.classList.add('show')
})

// Hiding dropdown when clicking outside
document.addEventListener('click', (e) =>
{
   if (!dropdownContent.contains(e.target))
   {
      dropdownContent.classList.remove('show')
   }
})

window.addEventListener('load', (e) =>
{
   if (!dropdownContent.contains(e.target))
   {
      dropdownContent.classList.remove('show')
   }
})