(function() {var implementors = {};
implementors["amethyst"] = ["impl Encode for NSPoint","impl Encode for NSRect","impl Encode for NSSize",];
implementors["amethyst_renderer"] = ["impl Encode for NSPoint","impl Encode for NSRect","impl Encode for NSSize",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
