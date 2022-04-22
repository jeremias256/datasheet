let app = new Object();

app.collapseButton = prm => {
  let icon = $(prm.button).find('i');

  $(prm.target).on({
    'show.bs.collapse': () => {
      icon
        .removeClass('fa-chevron-up')
        .addClass('fa-chevron-down')
        .attr('aria-expanded', 'true');
    },
    'hide.bs.collapse': () => {
      icon
        .removeClass('fa-chevron-down')
        .addClass('fa-chevron-up')
        .attr('aria-expanded', 'false');
    }
  });
}

app.videoPreview = () => {
  let video = document.querySelectorAll('video');

  video.forEach(element => {
    if (!element.autoplay) {
      element.onplaying = function () {
        element.dataset.playing = 'true';
      }

      element.onpause = function () {
        element.dataset.playing = 'false';
        element.load();
      }

      element.addEventListener('mouseover', function () {
        video.forEach(e => {
          if (e.dataset.playing == 'true') {
            e.pause();
          }
        });
        this.play();
      }, false);

      element.addEventListener('touchstart', function () {
        video.forEach(e => {
          if (e.dataset.playing == 'true') {
            e.pause();
          }
        });
        this.play();
      }, false);
    }
  });
}

$(document).ready(function () {
  app.videoPreview();

  $('#dismiss').on('click', () => {
    if ($('#dismiss').hasClass('is-active')) {
      $('#sidebar, .overlay').removeClass('active');
      $('#dismiss').removeClass('is-active');
      $('main').removeClass('active');
    } else {
      $('#sidebar, .overlay').addClass('active');
      $('#dismiss').addClass('is-active');
      $('main').addClass('active');
    }
  });

  $('.lazy').Lazy({
    effect: 'fadeIn',
    effectTime: 1000,
    scrollDirection: 'vertical'
  });

  // Menu collapse mobile
  app.collapseButton({
    target: '#navMobCategories',
    button: '#btnMobCategories',
  });

  app.collapseButton({
    target: '#navMobPornstars',
    button: '#btnMobPornstars'
  });

  app.collapseButton({
    target: '#navMobPlaymates',
    button: '#btnMobPlaymates'
  });

  // Menu collapse desktop
  app.collapseButton({
    target: '#navDesCategories',
    button: '#btnDesCategories'
  });

  app.collapseButton({
    target: '#navDesPornstars',
    button: '#btnDesPornstars'
  });

  app.collapseButton({
    target: '#navDesPlaymates',
    button: '#btnDesPlaymates'
  });
});