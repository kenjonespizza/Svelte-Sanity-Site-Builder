import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#sapper')
});


sapper.prefetchRoutes(); // What does this do????  PS, Ken Added this, so if in doubt... DELETE IT