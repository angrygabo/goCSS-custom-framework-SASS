<p align="center">
	<img src="http://igluehost.com/wp-content/uploads/2016/02/Screenshot_2.jpg" alt="goCSS logo" width="200"></br>
	CSS Framework Mobile First - Release 28/03/2020. versión SASS</br></br>
	<a href="#breakpoints">breackpoints</a> | 
	<a href="#grid">grid</a> |  
	<a href="#child-col-único-en-boogo">Child-col (nuevo)</a> | 
	<a href="#order-único-en-boogo">order (nuevo)</a> </br>
	<a href="#row-cols-nuevo">row-cols (nuevo)</a> | 
	<a href="#offset">offset</a> | 
	<a href="#márgenes-y-espaciados">márgenes y espaciados</a>
	<a href="#borders">borders</a> | 
	<a href="#backgrounds">backgrounds</a> | 
	<a href="#botones" style="color: #b873ff!important">botones</a>
</p>


# goCSS 1.0 beta 

(La versión 1.0 beta solo dispone del sistema de grid basado en flexbox).

booGO fue pensado y desarrollado para sacar su máximo provecho en desarrollos móviles pero tambien puede usarse perfectamente en desarrollos desktop. Use nuestra poderosa cuadrícula flexbox para crear diseños de todas las formas y tamaños gracias a un sistema de doce (12) columnas, cinco niveles de respuesta predeterminados, variables Sass y mixins, y docenas de clases predefinidas.

booGO es livano y potente, tan solo pesa 100 KB en su archivo minificado. Hemos incorporado todas las clases existentes en otras versiones de frameworks más famosos, reduciendo al máximo la curva de aprendizaje, es decir, si ya has trabajado con otros frameworks CSS no tendrás problemas con booGO.

Además booGO cuenta con clases propias como ".child-col-{cols}, .child-col-{size}-{cols}, .child-spacing-{cols} " y "order-{size}-{cols}" abriendo un mundo de posibilidades, ideal para dispositivos móviles.

# Presets

booGO viene configurado con un conjunto de parámetros generales como un punto de partida sensible para minimizar las diferencias entre los navegadores y permitir valores predeterminados de representación más agradables.

# ¿Qué será lo nuevo?

Estamos incorporando las librerias JS más potentes.

	Una amplia galería de componentes
	Layaouts
	Pack de templates móviles gratuitos y pagos
	Pack de iconos (Fuentes y SVG)
	Parallax
	Animaciones y más...

# 12 Columnas

	$cols:                     12;

# Breakpoints

	'xs':                      460px,
	'sm':                      760px,
	'md':                      1366px,
	'lg':                      1536px,
	'xl':                      1700px

# Grid

	.row
	.col
	.col-auto
	.col-{cols}  (12 columnas)
	.col-{sizes}-{cols} (5 breakpoint 12 columnas)
	
Aplique clases a contenedores

	.container (xl,lg,md,sm,xs)
	.container-fluid (width 100% conservando padding laterales 15px)
	.w-100,.full-width (width 100%)
	.w-vh,.full-width-viewport  (forzar elemento a ajustarse al width viewport)
	.h-100 (height 100%)
	.h-vh (height viewport)

Justifique la posición de sus elementos con "jutify-content" y aplique reglas para los diferentes breakpoints.

	.justify-content-start
	.justify-content-end
	.justify-content-center 
	.justify-content-between
	.justify-content-around
		.justify-content-#{$size}-start
		.justify-content-#{$size}-end
		.justify-content-#{$size}-center
		.justify-content-#{$size}-between
		.justify-content-#{$size}-around
	
Alinee verticalmente elementos y aplique reglas para los diferentes breakpoints

	.align-items-start
	.align-items-center
	.align-items-end
		.align-items-{size}-start
		.align-items-{size}-center
		.align-items-{size}-end

	.align-self-start
	.align-self-center
	.align-self-end
		.align-self-{size}-start
		.align-self-{size}-center
		.align-self-{size}-end	
	
clases Flexbox

	.d-flex
	.d-inline-flex
        .d-#{$size}-flex
        .d-#{$size}-inline-flex
	.flex-row
	.flex-row-reverse
	.flex-column
	.flex-column-reverse
        .flex-#{$size}-row
        .flex-#{$size}-row-reverse
        .flex-#{$size}-column
        .flex-#{$size}-column-reverse

# Child-col

Con tres (3) niveles de espaciado "child-spacing-(1,2,3)" añade tamaño en común a todos los hijos de un child-cold, también puedes aplicar reglas en distintos breakpoints.

	.child-col-{cols}
		.child-col-{sizes}-{cols}

	<div class="row child-col-4 child-col-md-12 child-col-sm-6 child-spacing-2">
	    <div class="col"></div>
	    <div class="col"></div>
	    <div class="col"></div>
	    <div class="col"></div>
	</div>
	
# Order

Ordene la posición de sus elementos en la web con nuestras clases "order" y aplique reglas para los diferentes breakpoints. (Único en booGO)

	.order-{cols}
		.order-{sizes}-{cols}
	
	<div class="row">
	    <div class="col order-1 order-sm-4 order-md-2">1</div>
	    <div class="col order-2 order-sm-3 order-md-4">2</div>
	    <div class="col order-3 order-sm-2 order-md-1">3</div>
	    <div class="col order-4 order-sm-1 order-md-3">4</div>
	</div>

# Row cols (Nuevo)

Use estas clases de columnas de fila para crear rápidamente diseños de cuadrícula básicos o para controlar los diseños de sus tarjetas.

	.row-cols-{cols}
	.row-cols-{sizes}-{cols}

	<div class="row row-col-6 row-cols-sm-2 row-cols-md-4">
	    <div class="col"></div>
	    <div class="col"></div>
	    <div class="col"></div>
	    <div class="col"></div>
	</div>

# Offset
	.offset-{cols}
	.offset-{sizes}-{cols}

	
# Márgenes y espaciados

Añada reglas de responsives a sus márgenes y espaciados "mt-{size}-{1/2/3/4/5}" con nuestros breakpoints y cinco (5) niveles de espaciado.

	.mt-{1/2/3/4/5}, .mt-{size}-{1/2/3/4/5} (margin-top)
	.mb-{1/2/3/4/5}, .mb-{size}-{1/2/3/4/5} (margin-bottom)
	.my-{1/2/3/4/5}, .my-{size}-{1/2/3/4/5} (margin-top/margin-bottom)

	.ml-{1/2/3/4/5}, .ml-{size}-{1/2/3/4/5} (margin-left)
	.mr-{1/2/3/4/5}, .mr-{size}-{1/2/3/4/5} (margin-right)
	.mx-{1/2/3/4/5}, .mx-{size}-{1/2/3/4/5} (margin-left/margin-right)
	
	.pt-{1/2/3/4/5}, .pt-{size}-{1/2/3/4/5} (padding-top)
	.pb-{1/2/3/4/5}, .pb-{size}-{1/2/3/4/5} (padding-bottop)
	.py-{1/2/3/4/5},.py-{size}-{1/2/3/4/5} (padding-top/padding-bottop)

	.pl-{1/2/3/4/5}, .pl-{size}-{1/2/3/4/5} (padding-left)
	.pr-{1/2/3/4/5}, .pr-{size}-{1/2/3/4/5} (padding-right)
	.px-{1/2/3/4/5}, .px-{size}-{1/2/3/4/5} (padding-left/padding-right)

	<div class="row my-4 my-sm-2 my-md-3">
	    <div class="col"></div>
	    <div class="col"></div>
	    <div class="col"></div>
	    <div class="col"></div>
	</div>

# Borders

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

# Backgrounds

	.bg-succes
	.bg-warning
	.bg-danger
	.bg-white
	.bg-black
	.bg-light-gray
	.bg-dark-gray

# Botones

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
	

<p>
	<a href="http://jigsaw.w3.org/css-validator/check/referer">
		<img style="border:0;width:88px;height:31px"
			src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
			alt="¡CSS Válido!" />
	</a>
</p>
Este documento ha pasado el test: W3C CSS Validator (Level 3)
