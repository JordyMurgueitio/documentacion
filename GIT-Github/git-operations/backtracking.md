# How to backtrack 

Git offers a few eraser-like features that allow us to undo mistakes during project creation


## head commit 
In Git, the commit you are currently on is known as the HEAD commit

To see the HEAD commit, enter:
```bash
git show HEAD
```

The output of this command will display everything the git log command displays for the HEAD commit, plus all the file changes that were committed

## git checkout
The command:
```bash
git checkout HEAD filename
```
will restore the file in your working directory to look exactly as it did when you last made a commit

## git reset I 
We can unstage that file from the staging area using
```bash
git reset HEAD filename
```
This command resets the file in the staging area to be the same as the HEAD commit. It does not discard file changes from the working directory, it just removes them from the staging area.

## git reset II 
Git enables you to rewind to the part before you made the wrong turn. You can do this with:
```bash
git reset commit_SHA
```
This command works by using the first 7 characters of the SHA of a previous commit. For example, if the SHA of the previous commit is **5d692065cf51a2f50ea8e7b19b5a7ae512f633ba**, use
```bash
git reset 5d69206
```
HEAD is now set to that previous commit