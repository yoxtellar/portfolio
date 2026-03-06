document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tag = btn.dataset.filter;
    document.querySelectorAll('.work-item').forEach(item => {
      item.dataset.hidden = (tag !== 'all' && item.dataset.tag !== tag) ? 'true' : 'false';
    });
  });
});
