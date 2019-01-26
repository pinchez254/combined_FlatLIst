#  react-native combined_FlatLIst with  different data sources for react-native
The different data is to be rendered in horizontal flatlists
A FlatList takes two functions, a renderItem and a keyExtractor. The keyExtractor is only necessary if your items don't have a key, and it is completely re-useable. So you will need a renderItem for every different FlatList that you plan on rendering.

So the outer FlatList uses the renderMainItem function, the inner FlatList uses the renderHorizontalItem

Notice how I have set up my data. Each object has a type that allows me to switch between what should be rendered in the renderMainItem function either returning a row or returning another FlatList.
The trick to combined different data sources is to combine the data into one array using the splice method as show.
you have the freedom to decided the instances to render the data from different data points
