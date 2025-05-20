import { fromEvent, map, tap } from 'rxjs';
import './style.css';

const texto = document.createElement("div")
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra fermentum ornare. Morbi et velit volutpat urna tempor pulvinar in vel lectus. Ut neque nibh, accumsan eu libero id, viverra vehicula purus. Curabitur venenatis fermentum pulvinar. Praesent eu odio accumsan, porta orci vitae, rhoncus sapien. Donec egestas faucibus dignissim. Aenean nec sem felis. Maecenas id cursus erat. Aenean dapibus dignissim neque in suscipit. Phasellus sollicitudin luctus semper. Donec porttitor pellentesque neque, sed pellentesque magna. Nullam consectetur maximus neque non dictum. Aliquam ac ligula in felis aliquam ullamcorper. Nunc convallis purus eu nisl vehicula, sed condimentum quam sagittis. Sed nunc velit, convallis quis est a, posuere ultricies felis.
<br/>
<br/>
Quisque nec condimentum nibh. Quisque faucibus quis ex ac scelerisque. Phasellus porta ligula nec risus posuere dignissim. Duis justo quam, interdum eget feugiat eu, luctus vitae tellus. Aliquam felis odio, varius sit amet felis eu, luctus posuere dui. Duis venenatis luctus ex, ac volutpat nulla auctor at. Aenean turpis nulla, pulvinar tempus bibendum eu, viverra nec lorem. Etiam leo justo, commodo non est non, iaculis ultricies elit. Suspendisse a dui luctus, vestibulum dui sit amet, porta velit. Aenean leo nibh, sollicitudin a arcu vitae, auctor maximus lorem. Quisque ut nulla justo.
<br/>
<br/>
Integer tristique felis eget dolor ultricies, in mattis nulla sodales. Vivamus vel lacinia urna. Curabitur id libero eget ex rutrum aliquam quis non dolor. In porttitor sagittis interdum. Vivamus et metus libero. Integer molestie augue mauris, nec rhoncus turpis fermentum et. Integer metus ante, viverra sit amet egestas eu, pellentesque in dolor. Proin auctor volutpat lectus. Praesent eu euismod nisl. Nullam at purus malesuada, bibendum ipsum et, scelerisque erat. Nam erat leo, vehicula ac malesuada ornare, congue eget eros. Nam commodo nisl ac porta eleifend.
<br/>
<br/>
Nulla gravida ex sed sollicitudin hendrerit. Nulla finibus, lorem vel viverra gravida, urna nisi efficitur nisi, eu placerat felis nunc non ante. Fusce at orci eget orci pretium pharetra vitae in dolor. Fusce sit amet nisl ac metus congue tristique. Duis consectetur arcu et mi scelerisque, a iaculis ante porttitor. Duis pharetra mauris quis turpis egestas, at imperdiet nisi venenatis. Fusce quis neque at est cursus sodales pretium id ipsum. Suspendisse mi mauris, gravida vitae turpis at, bibendum vulputate diam. Proin eu ornare turpis. Suspendisse tincidunt, lacus id interdum aliquam, urna lorem dictum enim, at feugiat leo felis a eros. Vestibulum ullamcorper venenatis ultrices.
<br/>
<br/>
Vivamus urna augue, volutpat vitae feugiat sit amet, volutpat at mauris. Suspendisse eros nibh, rhoncus sed tempor ut, accumsan eu magna. Etiam lobortis, odio ac placerat tempus, odio ipsum scelerisque enim, ac lacinia velit tortor id erat. Aenean auctor nulla vitae ultrices dictum. Duis ligula ex, pulvinar eget lobortis non, faucibus eget orci. Maecenas fermentum, ex ac vehicula dapibus, dolor neque facilisis urna, in consectetur ligula tellus sed ex. Suspendisse malesuada pellentesque tincidunt. Fusce ut ante at magna vehicula hendrerit. Pellentesque euismod ligula a nunc porttitor scelerisque. Sed a eros vel urna pharetra porttitor. Pellentesque sagittis varius nunc et semper. Praesent placerat ullamcorper nunc, vitae mattis turpis pharetra id. Phasellus ut bibendum nunc. Sed a tincidunt orci. Nunc pulvinar felis non sapien luctus interdum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra fermentum ornare. Morbi et velit volutpat urna tempor pulvinar in vel lectus. Ut neque nibh, accumsan eu libero id, viverra vehicula purus. Curabitur venenatis fermentum pulvinar. Praesent eu odio accumsan, porta orci vitae, rhoncus sapien. Donec egestas faucibus dignissim. Aenean nec sem felis. Maecenas id cursus erat. Aenean dapibus dignissim neque in suscipit. Phasellus sollicitudin luctus semper. Donec porttitor pellentesque neque, sed pellentesque magna. Nullam consectetur maximus neque non dictum. Aliquam ac ligula in felis aliquam ullamcorper. Nunc convallis purus eu nisl vehicula, sed condimentum quam sagittis. Sed nunc velit, convallis quis est a, posuere ultricies felis.
<br/>
<br/>
Quisque nec condimentum nibh. Quisque faucibus quis ex ac scelerisque. Phasellus porta ligula nec risus posuere dignissim. Duis justo quam, interdum eget feugiat eu, luctus vitae tellus. Aliquam felis odio, varius sit amet felis eu, luctus posuere dui. Duis venenatis luctus ex, ac volutpat nulla auctor at. Aenean turpis nulla, pulvinar tempus bibendum eu, viverra nec lorem. Etiam leo justo, commodo non est non, iaculis ultricies elit. Suspendisse a dui luctus, vestibulum dui sit amet, porta velit. Aenean leo nibh, sollicitudin a arcu vitae, auctor maximus lorem. Quisque ut nulla justo.
<br/>
<br/>
Integer tristique felis eget dolor ultricies, in mattis nulla sodales. Vivamus vel lacinia urna. Curabitur id libero eget ex rutrum aliquam quis non dolor. In porttitor sagittis interdum. Vivamus et metus libero. Integer molestie augue mauris, nec rhoncus turpis fermentum et. Integer metus ante, viverra sit amet egestas eu, pellentesque in dolor. Proin auctor volutpat lectus. Praesent eu euismod nisl. Nullam at purus malesuada, bibendum ipsum et, scelerisque erat. Nam erat leo, vehicula ac malesuada ornare, congue eget eros. Nam commodo nisl ac porta eleifend.
<br/>
<br/>
Nulla gravida ex sed sollicitudin hendrerit. Nulla finibus, lorem vel viverra gravida, urna nisi efficitur nisi, eu placerat felis nunc non ante. Fusce at orci eget orci pretium pharetra vitae in dolor. Fusce sit amet nisl ac metus congue tristique. Duis consectetur arcu et mi scelerisque, a iaculis ante porttitor. Duis pharetra mauris quis turpis egestas, at imperdiet nisi venenatis. Fusce quis neque at est cursus sodales pretium id ipsum. Suspendisse mi mauris, gravida vitae turpis at, bibendum vulputate diam. Proin eu ornare turpis. Suspendisse tincidunt, lacus id interdum aliquam, urna lorem dictum enim, at feugiat leo felis a eros. Vestibulum ullamcorper venenatis ultrices.
<br/>
<br/>
Vivamus urna augue, volutpat vitae feugiat sit amet, volutpat at mauris. Suspendisse eros nibh, rhoncus sed tempor ut, accumsan eu magna. Etiam lobortis, odio ac placerat tempus, odio ipsum scelerisque enim, ac lacinia velit tortor id erat. Aenean auctor nulla vitae ultrices dictum. Duis ligula ex, pulvinar eget lobortis non, faucibus eget orci. Maecenas fermentum, ex ac vehicula dapibus, dolor neque facilisis urna, in consectetur ligula tellus sed ex. Suspendisse malesuada pellentesque tincidunt. Fusce ut ante at magna vehicula hendrerit. Pellentesque euismod ligula a nunc porttitor scelerisque. Sed a eros vel urna pharetra porttitor. Pellentesque sagittis varius nunc et semper. Praesent placerat ullamcorper nunc, vitae mattis turpis pharetra id. Phasellus ut bibendum nunc. Sed a tincidunt orci. Nunc pulvinar felis non sapien luctus interdum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra fermentum ornare. Morbi et velit volutpat urna tempor pulvinar in vel lectus. Ut neque nibh, accumsan eu libero id, viverra vehicula purus. Curabitur venenatis fermentum pulvinar. Praesent eu odio accumsan, porta orci vitae, rhoncus sapien. Donec egestas faucibus dignissim. Aenean nec sem felis. Maecenas id cursus erat. Aenean dapibus dignissim neque in suscipit. Phasellus sollicitudin luctus semper. Donec porttitor pellentesque neque, sed pellentesque magna. Nullam consectetur maximus neque non dictum. Aliquam ac ligula in felis aliquam ullamcorper. Nunc convallis purus eu nisl vehicula, sed condimentum quam sagittis. Sed nunc velit, convallis quis est a, posuere ultricies felis.
<br/>
<br/>
Quisque nec condimentum nibh. Quisque faucibus quis ex ac scelerisque. Phasellus porta ligula nec risus posuere dignissim. Duis justo quam, interdum eget feugiat eu, luctus vitae tellus. Aliquam felis odio, varius sit amet felis eu, luctus posuere dui. Duis venenatis luctus ex, ac volutpat nulla auctor at. Aenean turpis nulla, pulvinar tempus bibendum eu, viverra nec lorem. Etiam leo justo, commodo non est non, iaculis ultricies elit. Suspendisse a dui luctus, vestibulum dui sit amet, porta velit. Aenean leo nibh, sollicitudin a arcu vitae, auctor maximus lorem. Quisque ut nulla justo.
<br/>
<br/>
Integer tristique felis eget dolor ultricies, in mattis nulla sodales. Vivamus vel lacinia urna. Curabitur id libero eget ex rutrum aliquam quis non dolor. In porttitor sagittis interdum. Vivamus et metus libero. Integer molestie augue mauris, nec rhoncus turpis fermentum et. Integer metus ante, viverra sit amet egestas eu, pellentesque in dolor. Proin auctor volutpat lectus. Praesent eu euismod nisl. Nullam at purus malesuada, bibendum ipsum et, scelerisque erat. Nam erat leo, vehicula ac malesuada ornare, congue eget eros. Nam commodo nisl ac porta eleifend.
<br/>
<br/>
Nulla gravida ex sed sollicitudin hendrerit. Nulla finibus, lorem vel viverra gravida, urna nisi efficitur nisi, eu placerat felis nunc non ante. Fusce at orci eget orci pretium pharetra vitae in dolor. Fusce sit amet nisl ac metus congue tristique. Duis consectetur arcu et mi scelerisque, a iaculis ante porttitor. Duis pharetra mauris quis turpis egestas, at imperdiet nisi venenatis. Fusce quis neque at est cursus sodales pretium id ipsum. Suspendisse mi mauris, gravida vitae turpis at, bibendum vulputate diam. Proin eu ornare turpis. Suspendisse tincidunt, lacus id interdum aliquam, urna lorem dictum enim, at feugiat leo felis a eros. Vestibulum ullamcorper venenatis ultrices.
<br/>
<br/>
Vivamus urna augue, volutpat vitae feugiat sit amet, volutpat at mauris. Suspendisse eros nibh, rhoncus sed tempor ut, accumsan eu magna. Etiam lobortis, odio ac placerat tempus, odio ipsum scelerisque enim, ac lacinia velit tortor id erat. Aenean auctor nulla vitae ultrices dictum. Duis ligula ex, pulvinar eget lobortis non, faucibus eget orci. Maecenas fermentum, ex ac vehicula dapibus, dolor neque facilisis urna, in consectetur ligula tellus sed ex. Suspendisse malesuada pellentesque tincidunt. Fusce ut ante at magna vehicula hendrerit. Pellentesque euismod ligula a nunc porttitor scelerisque. Sed a eros vel urna pharetra porttitor. Pellentesque sagittis varius nunc et semper. Praesent placerat ullamcorper nunc, vitae mattis turpis pharetra id. Phasellus ut bibendum nunc. Sed a tincidunt orci. Nunc pulvinar felis non sapien luctus interdum.

`;


const body = document.querySelector("body")
body?.append(texto)

const progressBar = document.createElement("div")
progressBar.setAttribute("class", "progress-bar")
body?.append(progressBar)

// Funcion que haga el calculo

const calcularPorcentajeScroll = (event: Event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = document.documentElement;

    // console.log({ scrollTop, scrollHeight, clientHeight })
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    return scrollPercentage;
}


// Streams

const scroll$ = fromEvent<Event>(document, "scroll")

// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
    map(calcularPorcentajeScroll),
    tap(console.log)

).subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`
})
