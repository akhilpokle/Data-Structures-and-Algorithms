var dfs = function(image,sr,sc,newColor,oldColor){
    if(sr<0 || sc<0 || sr>=image.length || sc>=image[0].length || image[sr][sc] != oldColor) return;
    image[sr][sc] = newColor;
    dfs(image,sr-1,sc,newColor,oldColor);
    dfs(image,sr,sc+1,newColor,oldColor);
    dfs(image,sr+1,sc,newColor,oldColor);
    dfs(image,sr,sc-1,newColor,oldColor);
}

var floodFill = function(image, sr, sc, newColor) {
    let oldColor = image[sr][sc];
    if(oldColor == newColor) return image; 
    dfs(image,sr,sc,newColor,oldColor);
    return image;
};
