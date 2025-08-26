
// IntersectionObserver for fade-in
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
},{threshold:0.2})

document.querySelectorAll('.fade').forEach(el=>observer.observe(el))

// Back to top button
const topBtn = document.getElementById('backToTop')
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 400){ topBtn.classList.add('show') } else { topBtn.classList.remove('show') }
})
topBtn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}))
