## git stash

In order to go to a different branch, one must always be at a clean commit point
```bash
$ git stash
```
Running the command above will store your work temporarily for later use in a hidden directory.

At this point, you can switch branches and do work elsewhere.

Once the bug is fixed, you want to retrieve the code you were working on previously, you can “pop” the work that was stored when you used git stash.
```bash
$ git stash pop
```
