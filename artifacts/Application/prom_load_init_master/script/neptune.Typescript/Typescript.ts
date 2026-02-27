sap.n.Shell.attachInit((data) => {
    console.log("prom_load_init_master", "Init", data);
    AppCache.Load("prom_load_init_sync", {
        load: "init",
        startParams: {
            one: "One",
            two: "Two",
        }
    });
});

sap.n.Shell.attachBeforeDisplay((data) => {
    console.log("prom_load_init_master", "Before Display", data);
});

// neptune.Shell.attachInit((data) => {
//     console.log("prom_load_init_master", "Init", data);
//     AppCache.Load("prom_load_init_sync", {
//         load: "init",
//         startParams: {
//             one: "One",
//             two: "Two",
//         }
//     });
// });

// neptune.Shell.attachBeforeDisplay((data) => {
//     console.log("prom_load_init_master", "Before Display", data);
// });
