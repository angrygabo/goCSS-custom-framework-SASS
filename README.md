<p align="center">
    <img src="http://igluehost.com/wp-content/uploads/2016/02/Screenshot_2.jpg" alt="booGO logo" width="297" height="157">
</p>

# booGO 1.0 beta
CSS Framework Mobile First - Release 28/03/2020.

booGO incialmente esta desarrollado en SASS, próximamente habilitaremos nuevas versiones es LESS.

booGO es livano y potente, tan solo pesa 100 KB en su archivo minificado. Hemos incorporado todas las clases existentes en Boostrap 4.1.1 además de otras clases propias como ".child-col y  .spacing" para reducir al máximo la curva de aprendizaje, es decir, si conoces boostrap no tendrás problemas con booGO

# Presets

Este framework CSS viene configurado con un conjunto de parámetros generales como un punto de partida sensible para minimizar las diferencias entre los navegadores y permitir valores predeterminados de representación más agradables

# ¿Qué será lo nuevo?

Estamos incorporando las librerias JS más potentes.

	Siwper Slider
	Componentes JS de materializecss (https://materializecss.com/)
	Pack de iconos (Fuentes y SVG)
	Parallax
	Animaciones y más...

# Columnas 12

	$cols:                     12;

# Sizes

	'xs'       :             460px,
	'sm'       :             760px,
	'md'       :             1366px,
	'lg'       :             1536px,
	'xl'       :             1700px

# Clases disponibles en esta versión

	.row
	.container (xl,lg,md,sm,xs)
	.col
	.col-{cols}
	.col-{sizes}-{cols}

# .child-cols (añade tamaño en común a todos los hijos de un child-cold)

	.child-col-{cols}
	.child-col-{sizes}-{cols}

	<div class="row child-col-6 child-spacing-1">
	    <div class="col"></div>
	    <div class="col"></div>
	    <div class="col"></div>
	    <div class="col"></div>
	</div>

$child-spacing:             3; (tres niveles de espacio entre columnas, solo aplica a hijos de .child-col)

# .row-cols (divide en columnas a hijos de un row)

	.row-col-{cols}
	.row-col-{sizes}-{cols}

	<div class="row row-col-2">
	    <div class="col"></div>
	    <div class="col"></div>
	    <div class="col"></div>
	    <div class="col"></div>
	</div>

# Offset
	.offset-{cols}
	.offset-{sizes}-{cols}
	
# márgenes y espaciados

	.mt-1, .mt-2, .mt-3, .mt-4, .mt-5 (margin-top)
	.mb-1, .mb-2, .mb-3, .mb-4, .mb-5 (margin-bottom)
	.my-1, .my-2, .my-3, .my-4, .my-5 (margin-top/margin-bottom)

	.ml-1, .ml-2, .ml-3, .ml-4, .ml-5 (margin-left)
	.mr-1, .mr-2, .mr-3, .mr-4, .mr-5 (margin-right)
	.mx-1, .mx-2, .mx-3, .mx-4, .mx-5 (margin-left/margin-right)

	.col-{size}-1, .col-{size}-2, .col-{size}-3, .col-{size}-4, .col-{size}-5, .col-{size}-6, .col-{size}-7, .col-{size}-8, .col-{size}-9, .col-{size}-10, .col-{size}-11, .col-{size}-12

# borders

	.rounded-circle
	.rounded-left
	.rounded-right
	.rounded-top
	.rounded-bottom

	.border
	.border-top
	.border-right
	.border-bottom
	.border-left
	.border-0
	.border-primary
	.border-secondary
	.border-success
	.border-warning
	.border-danger

# botones

	.btn

		.btn-lg
		.btn-sm
		.btn:disabled

		.btn-primary
		.btn-secondary
		.btn-success
		.btn-danger
		.btn-warning
		.btn-info
		.btn-light
		.btn-dark

		.btn-outline-primary
		.btn-outline-secondary
		.btn-outline-success
		.btn-outline-danger
		.btn-outline-warning
		.btn-outline-info
		.btn-outline-light
		.btn-outline-dark
		.btn-link

# pasa la prueba de validación w3c

<p>
	<a href="http://jigsaw.w3.org/css-validator/check/referer">
		<img style="border:0;width:88px;height:31px"
			src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
			alt="¡CSS Válido!" />
	</a>
</p>
Este documento ha pasado el test: W3C CSS Validator (Level 3)
