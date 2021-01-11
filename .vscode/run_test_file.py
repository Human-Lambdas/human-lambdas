#!/usr/bin/env python
import os
import sys

# this script lets vscode trigger django tests by converting the filename to a python module name
# to use this: Open test file in vs code, put in a breakpoint, and click run in the debug tab

if __name__ == "__main__":
    relative_file = sys.argv[1]
    python_package = relative_file.replace("/", ".").replace(".py", "")
    sys.argv = [
        "manage.py",
        "test",
        "--noinput",
        "--keepdb",
        python_package,
    ]

    sys.path.append(os.path.abspath("."))
    from manage import main

    main()
