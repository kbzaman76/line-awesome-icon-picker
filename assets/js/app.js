$('.iconPicker').iconpicker({
  align: 'center', // Only in div tag
  arrowClass: 'btn-danger',
  arrowPrevIconClass: 'las la-angle-left',
  arrowNextIconClass: 'las la-angle-right',
  cols: 10,
  footer: true,
  header: true,
  icon: 'las la-bomb',
  iconset: 'fontawesome5',
  labelHeader: '{0} of {1} pages',
  labelFooter: '{0} - {1} of {2} icons',
  placement: 'bottom', // Only in button tag
  rows: 5,
  search: false,
  searchText: 'Search icon',
  selectedClass: 'btn-success',
  unselectedClass: ''
  }).on('change', function (e) {
  $(this).parent().siblings('input[name=icon]').val(`<i class="${e.icon}"></i>`);
});