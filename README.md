# tailwindcss-plugin-for-epi
Boilerplate admin menu MVC plugin for Episerver with Tailwind CSS and config somewhat mimicking Episerver's design.

![Screenshot](https://raw.githubusercontent.com/krompaco/tailwindcss-plugin-for-epi/master/docs/screenshot.png)

For buttons there are some extracted components added the Tailwind CSS way.

These are `epi-primary`, `epi-danger` and `epi-flat`.

There is also a spinner in there to clarify when things are loading inside the Admin Mode frameset.

![Screenshot spinner](https://raw.githubusercontent.com/krompaco/tailwindcss-plugin-for-epi/master/docs/screenshot-spinner.png)

## Installation
Just copy the files from `src\alloy-example` into a recent Alloy project. Or just look at them and copy what you need. At minimum you will want to copy and link the minified CSS file from the `dist` folder.

## Contributing or modifying
Go to `src\tailwind-project` and do a `npm install`, then start by running `npm run dev`.

It will watch files and build a new CSS-file to the `dist` folder on every update.

I usually have `src\tailwind-project` opened in VS Code and have a typical Alloy site Solution in VS. To make it faster to see what you're doing and get files in the correct place when contributing or modifying one way is to add some build event commands.

### Example pre-build command

    xcopy /y C:\Projects\tailwindcss-plugin-for-epi\src\tailwind-project\dist\tailwindcss-plugin-for-epi.css $(ProjectDir)Static\css

### Example post-build commands

    xcopy /y $(ProjectDir)Controllers\ExamplePluginController.cs  C:\Projects\tailwindcss-plugin-for-epi\src\alloy-example\Controllers
    xcopy /y $(ProjectDir)Views\ExamplePlugin\Index.cshtml  C:\Projects\tailwindcss-plugin-for-epi\src\alloy-example\Views\ExamplePlugin
    xcopy /y $(ProjectDir)Global.asax.cs C:\Projects\tailwindcss-plugin-for-epi\src\alloy-example
    xcopy /y $(ProjectDir)Static\css\tailwindcss-plugin-for-epi.css C:\Projects\tailwindcss-plugin-for-epi\src\alloy-example\Static\css

## Thank you!

* http://ux.episerver.com/
* https://tailwindcss.com/
* https://codepen.io/AshutoshD/pen/dMEGqM (the loading spinner)