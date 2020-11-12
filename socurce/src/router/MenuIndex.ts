

export class MenuIndex {
    public static get value(): any {
        return {
            collapse: false,
            items: [
                {
                    icon: "el-icon-s-home",
                    index: "index",
                    title: "Home",
                },
                {
                    icon: "el-icon-s-grid",
                    index: "3",
                    title: "Easy3D",
                    subs: [
                        {
                            icon: "el-icon-s-grid",
                            index: "display3d",
                            title: "3D Display",
                        },
                        {
                            icon: "el-icon-s-grid",
                            index: "designer3d",
                            title: "3D Designer",
                        },
                    ],
                },
                {
                    icon: "el-icon-data-line",
                    index: "Electrical single line diagram",
                    title: "Easy2D",
                    subs: [
                        {
                            icon: "el-icon-s-grid",
                            index: "display2d",
                            title: "2D Display",
                        },
                        {
                            icon: "el-icon-s-grid",
                            index: "designer2d",
                            title: "2D Designer",
                        },
                    ],
                },
                {
                    icon: "el-icon-folder-opened",
                    index: "filemanager",
                    title: "File Manager",
                },
                {
                    icon: "el-icon-s-promotion",
                    index: "about",
                    title: "About",
                },
            ],
        };
    }
}
