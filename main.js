const transformers = [
  {
    id: 0,
    name: 'Optimus Prime',
    form: 'Freightliner Truck',
    form_type: 'vehicle',
    team: 'Autobot',
    photo: 'http://tfwiki.net/mediawiki/images2/2/2b/Shadowplay2_no_frikkin_way.jpg',
  },
  {
    id: 1,
    name: 'Megatron',
    form: 'Gun',
    form_type: 'object',
    team: 'Decepticon',
    photo: 'http://tfwiki.net/mediawiki/images2/thumb/9/92/MTMTE50_megatron_class_dismissed.jpg/562px-MTMTE50_megatron_class_dismissed.jpg',
  },
  {
    id: 2,
    name: 'Bumblebee',
    form: 'VW Beetle',
    form_type: 'vehicle',
    team: 'Autobot',
    photo: 'https://i.ytimg.com/vi/kCJFVQTrCac/hqdefault.jpg',
  },
  {
    id: 3,
    name: 'Soundwave',
    form: 'Walkman',
    form_type: 'object',
    team: 'Decepticon',
    photo: 'http://tfwiki.net/mediawiki/images2/8/8d/Soundwaves-allofustogether.jpg',
  },
  {
    id: 4,
    name: 'Starscream',
    form: 'Fighter Jet',
    form_type: 'vehicle',
    team: 'Decepticon',
    photo: 'http://tfwiki.net/mediawiki/images2/3/33/Ongoing13_sad_starscream_is_sad.jpg',
  },
  {
    id: 5,
    name: 'Rodimus Prime',
    form: 'Ford GT',
    form_type: 'vehicle',
    team: 'Autobot',
    photo: 'http://tfwiki.net/mediawiki/images2/thumb/f/f6/SpotlightHotRod-HotRodcvrAexcerpt.jpg/470px-SpotlightHotRod-HotRodcvrAexcerpt.jpg',
  }
];

$(document).ready(function(){
  console.log('jQ connected!');

  // function to filter transformers 
  const filterTransformers = (transformerTeam) => {
    return transformers.filter(transformer => transformer.team === transformerTeam)
  }
  // function to render one transformer
  const renderTransformer = (transformer) => {
    const $container = $('<div>');
    const $h2 = $('<h2>').text(transformer.name) //.appendTo($container);
    $container.append($h2)
    const $img = $('<img>').attr('src', transformer.photo).appendTo($container);
    const $ul = $('<ul>').appendTo($container);
    const $form = $('<li>').text(transformer.form).appendTo($ul);
    $('.display').append($container);
  }

  // Autobot event listener
  $('.autobots').click(()=>{
    $('.display').empty();
    filterTransformers('Autobot').forEach(renderTransformer)
  })

  // decepticon event listener
  $('.decepticons').click(() => {
    $('.display').empty();
    filterTransformers('Decepticon').forEach(renderTransformer)
  })


})