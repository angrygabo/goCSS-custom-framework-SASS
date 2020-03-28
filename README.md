# boogo
CSS Framework Mobile First (SASS)

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

# .child-cols (añade tamaña a todos los hijos de un child-cold)

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

# Mágenes y espciados

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

btn-link

# pasa la prueba de validación w3c

<p>
	<a href="http://jigsaw.w3.org/css-validator/check/referer">
		<img style="border:0;width:88px;height:31px"
			src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
			alt="¡CSS Válido!" />
	</a>
</p>
Este documento ha pasado el test: W3C CSS Validator (Level 3)
