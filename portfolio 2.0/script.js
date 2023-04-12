<!-- Ajoutez le code HTML de votre galerie d'images ici -->

<!-- Incluez jQuery avant d'inclure votre script JavaScript -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<!-- Votre script JavaScript -->
<script>
  // Récupérez toutes les images de la galerie
  const images = $('.gallery img');

  // Cachez toutes les images sauf la première
  images.hide();
  images.eq(0).show();

  // Ajoutez un événement de clic sur le bouton suivant
  $('#next-btn').click(() => {
    // Récupérez l'image actuellement affichée
    const currentImage = $('.gallery img:visible');

    // Cachez l'image actuelle et affichez la suivante
    currentImage.hide();
    currentImage.next().show();

    // Si la dernière image est affichée, revenez à la première image
    if (currentImage.next().length === 0) {
      images.eq(0).show();
    }
  });

  // Ajoutez un événement de clic sur le bouton précédent
  $('#prev-btn').click(() => {
    // Récupérez l'image actuellement affichée
    const currentImage = $('.gallery img:visible');

    // Cachez l'image actuelle et affichez la précédente
    currentImage.hide();
    currentImage.prev().show();

    // Si la première image est affichée, passez à la dernière image
    if (currentImage.prev().length === 0) {
      images.eq(images.length - 1).show();
    }
  });
</script>