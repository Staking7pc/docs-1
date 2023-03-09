"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8235],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=i,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},18:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:4,sidebar_label:"Recipe book tutorial",description:"Build a recipe book rollup with Ignite CLI, Celestia, and Rollkit."},a="\ud83e\udd57 Recipe book rollup",s={unversionedId:"tutorials/recipe-book",id:"tutorials/recipe-book",title:"\ud83e\udd57 Recipe book rollup",description:"Build a recipe book rollup with Ignite CLI, Celestia, and Rollkit.",source:"@site/docs/tutorials/recipe-book.md",sourceDirName:"tutorials",slug:"/tutorials/recipe-book",permalink:"/pr-preview/pr-140/docs/tutorials/recipe-book",draft:!1,editUrl:"https://github.com/rollkit/docs/tree/main/docs/tutorials/recipe-book.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Recipe book tutorial",description:"Build a recipe book rollup with Ignite CLI, Celestia, and Rollkit."},sidebar:"docs",previous:{title:"GM world tutorial",permalink:"/pr-preview/pr-140/docs/tutorials/gm-world"},next:{title:"How to restart your rollup",permalink:"/pr-preview/pr-140/docs/tutorials/restart-rollkit-rollup"}},p={},l=[{value:"\ud83d\udcd6 Overview",id:"-overview",level:2},{value:"\ud83d\udcbb Prerequisites",id:"-prerequisites",level:2},{value:"\ud83c\udfd7\xa0Scaffolding your rollup",id:"scaffolding-your-rollup",level:2},{value:"\ud83d\udd25 Use Ignite CLI to scaffold a <code>recipes</code> rollup",id:"-use-ignite-cli-to-scaffold-a-recipes-rollup",level:3},{value:"\ud83d\udc8e Installing Rollkit",id:"-installing-rollkit",level:3},{value:"\ud83d\udcac\xa0Message types",id:"message-types",level:2},{value:"\u2728\xa0Create message types",id:"create-message-types",level:3},{value:"\ud83e\udd3f\xa0Diving deeper into the message code",id:"diving-deeper-into-the-message-code",level:4},{value:"\ud83d\udcd5\xa0Define messages logic",id:"define-messages-logic",level:3},{value:"\ud83d\udd01 Keepers",id:"-keepers",level:2},{value:"\ud83d\udcd7\xa0Define <code>Recipe</code> type and <code>AppendRecipe</code> keeper method",id:"define-recipe-type-and-appendrecipe-keeper-method",level:3},{value:"\ud83d\udcd8\xa0Define keeper methods",id:"define-keeper-methods",level:3},{value:"\ud83c\udf7d\ufe0f\xa0Querying recipes",id:"\ufe0fquerying-recipes",level:2},{value:"\ud83d\udda5 Query recipes",id:"-query-recipes",level:3},{value:"\ud83d\udc69\u200d\ud83c\udf73 Running the recipes rollup",id:"-running-the-recipes-rollup",level:2},{value:"\u2728 Run a Celestia light node",id:"-run-a-celestia-light-node",level:3},{value:"\ud83d\uddde\ufe0f Start the recipes rollup",id:"\ufe0f-start-the-recipes-rollup",level:3},{value:"\u2328\ufe0f\xa0Query your recipes with the CLI",id:"\ufe0fquery-your-recipes-with-the-cli",level:3}],c={toc:l};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-recipe-book-rollup"},"\ud83e\udd57 Recipe book rollup"),(0,i.kt)("admonition",{title:"difficulty",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Beginner")),(0,i.kt)("h2",{id:"-overview"},"\ud83d\udcd6 Overview"),(0,i.kt)("p",null,"In this tutorial, we are going to build a blockchain\nfor your favorite recipes. The goal of this tutorial\nis to create a Rollkit rollup with a module that allows\nyou to write and read data to and from your application-specific\nblockchain. The end user will be able to submit new\nrecipes and read them from the blockchain."),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-140/docs/tutorials/gm-world"},(0,i.kt)("inlineCode",{parentName:"a"},"GM World")," tutorial"),", we defined a\nnew API endpoint and modified a keeper query function\nto return static data. In this tutorial, we will be\nmodifying the state with transactions (Cosmos SDK messages)\nthat are routed to a module and its message handlers, which\nare sent to the ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes")," blockchain."),(0,i.kt)("admonition",{title:"note",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This tutorial will explore developing with Rollkit,\nwhich is still in Alpha stage. If you run into bugs, please write a Github\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rollkit/docs/issues/new"},"Issue ticket"),"\nor let us know in our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/channels/638338779505229824/1065974175237414972"},"Discord"),".")),(0,i.kt)("admonition",{title:"caution",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"The script for this tutorial is built for Celestia's\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/mocha-testnet"},"Mocha testnet"),".\nIf you choose to use Arabica Devnet,\nyou will need to modify the script manually.")),(0,i.kt)("h2",{id:"-prerequisites"},"\ud83d\udcbb Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pr-preview/pr-140/docs/tutorials/gm-world"},"GM World Tutorial"))),(0,i.kt)("h2",{id:"scaffolding-your-rollup"},"\ud83c\udfd7\xa0Scaffolding your rollup"),(0,i.kt)("h3",{id:"-use-ignite-cli-to-scaffold-a-recipes-rollup"},"\ud83d\udd25 Use Ignite CLI to scaffold a ",(0,i.kt)("inlineCode",{parentName:"h3"},"recipes")," rollup"),(0,i.kt)("p",null,"Run the following command to scaffold your ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes")," chain using Ignite CLI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ignite scaffold chain recipes --address-prefix recipes\n")),(0,i.kt)("p",null,"Your new ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes")," chain has been scaffolded and\n",(0,i.kt)("inlineCode",{parentName:"p"},"--address-prefix recipes")," allows the address prefix\nto be ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmos"),"."),(0,i.kt)("p",null,"Change into the ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd recipes\n")),(0,i.kt)("h3",{id:"-installing-rollkit"},"\ud83d\udc8e Installing Rollkit"),(0,i.kt)("p",null,"To swap out Tendermint for Rollkit, run the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go mod edit -replace github.com/cosmos/cosmos-sdk=github.com/rollkit/cosmos-sdk@v0.46.7-rollkit-v0.6.0-no-fraud-proofs\ngo mod edit -replace github.com/tendermint/tendermint=github.com/celestiaorg/tendermint@v0.34.22-0.20221202214355-3605c597500d\ngo mod tidy\ngo mod download\n")),(0,i.kt)("h2",{id:"message-types"},"\ud83d\udcac\xa0Message types"),(0,i.kt)("h3",{id:"create-message-types"},"\u2728\xa0Create message types"),(0,i.kt)("p",null,"Create a message type and its handler with the ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ignite scaffold message createRecipe dish ingredients\n")),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"modify proto/recipes/recipes/tx.proto\nmodify x/recipes/client/cli/tx.go\ncreate x/recipes/client/cli/tx_create_recipe.go\ncreate x/recipes/keeper/msg_server_create_recipe.go\nmodify x/recipes/module_simulation.go\ncreate x/recipes/simulation/create_recipe.go\nmodify x/recipes/types/codec.go\ncreate x/recipes/types/message_create_recipe.go\ncreate x/recipes/types/message_create_recipe_test.go\n\n\ud83c\udf89 Created a message `createRecipe`.\n")),(0,i.kt)("p",null,"Head to your ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes/proto/recipes/recipes/tx.proto")," file\nand you will see the ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgCreateRecipe")," has been created.\nAdd ",(0,i.kt)("inlineCode",{parentName:"p"},"uint64 id = 1;")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgCreateRecipeResponse")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="recipes/proto/recipes/recipes/tx.proto"',title:'"recipes/proto/recipes/recipes/tx.proto"'},"message MsgCreateRecipeResponse {\n  uint64 id = 1;\n}\n")),(0,i.kt)("h4",{id:"diving-deeper-into-the-message-code"},"\ud83e\udd3f\xa0Diving deeper into the message code"),(0,i.kt)("p",null,"Looking further into the message, we can see that\n",(0,i.kt)("inlineCode",{parentName:"p"},"MsgCreateRecipe")," has 3 fields: creator, dish, and ingredients."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="recipes/proto/recipes/recipes/tx.proto"',title:'"recipes/proto/recipes/recipes/tx.proto"'},"message MsgCreateRecipe {\n  string creator = 1;\n  string dish = 2;\n  string ingredients = 3;\n}\n")),(0,i.kt)("p",null,"We can also see that the ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateRecipe")," RPC has already been added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg")," service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="recipes/proto/recipes/recipes/tx.proto"',title:'"recipes/proto/recipes/recipes/tx.proto"'},"service Msg {\n  rpc CreateRecipe(MsgCreateRecipe) returns (MsgCreateRecipeResponse);\n}\n")),(0,i.kt)("h3",{id:"define-messages-logic"},"\ud83d\udcd5\xa0Define messages logic"),(0,i.kt)("p",null,"Navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes/x/recipes/keeper/msg_server_create_recipe.go"),".\nFor our recipes chain, we want the dish and ingredients to be written\nto the blockchain\u2019s state as a new recipe. Add the following code to\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateRecipe")," function underneath the imports:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/x/recipes/keeper/msg_server_create_recipe.go"',title:'"recipes/x/recipes/keeper/msg_server_create_recipe.go"'},"func (k msgServer) CreateRecipe(goCtx context.Context, msg *types.MsgCreateRecipe) (*types.MsgCreateRecipeResponse, error) {\n  // Get the context\n  ctx := sdk.UnwrapSDKContext(goCtx)\n\n  // Create variable of type Recipe\n  var recipe = types.Recipe{\n     Creator: msg.Creator,\n     Dish: msg.Dish,\n     Ingredients: msg.Ingredients,\n  }\n\n  // Add a recipe to the store and get back the ID\n  id := k.AppendRecipe(ctx, recipe)\n\n  // Return the ID of the recipe\n  return &types.MsgCreateRecipeResponse{Id: id}, nil\n}\n")),(0,i.kt)("p",null,"You will see errors in your text editor, which we will resolve in the next step."),(0,i.kt)("h2",{id:"-keepers"},"\ud83d\udd01 Keepers"),(0,i.kt)("h3",{id:"define-recipe-type-and-appendrecipe-keeper-method"},"\ud83d\udcd7\xa0Define ",(0,i.kt)("inlineCode",{parentName:"h3"},"Recipe")," type and ",(0,i.kt)("inlineCode",{parentName:"h3"},"AppendRecipe")," keeper method"),(0,i.kt)("p",null,"Create a file ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes/proto/recipes/recipes/recipe.proto")," and\ndefine the ",(0,i.kt)("inlineCode",{parentName:"p"},"Recipe")," message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/proto/recipes/recipes/recipe.proto"',title:'"recipes/proto/recipes/recipes/recipe.proto"'},'syntax = "proto3";\n\npackage recipes.recipes;\n\noption go_package = "recipes/x/recipes/types";\n\nmessage Recipe {\n  string creator = 1;\n  uint64 id = 2;\n  string dish = 3; \n  string ingredients = 4; \n}\n')),(0,i.kt)("h3",{id:"define-keeper-methods"},"\ud83d\udcd8\xa0Define keeper methods"),(0,i.kt)("p",null,"Now you\u2019ll define your ",(0,i.kt)("inlineCode",{parentName:"p"},"AppendRecipe")," keeper method."),(0,i.kt)("p",null,"Create the ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes/x/recipes/keeper/recipe.go")," file. The\n",(0,i.kt)("inlineCode",{parentName:"p"},"AppendRecipe")," function is a placeholder to brainstorm how\nto implement it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/x/recipes/keeper/recipe.go"',title:'"recipes/x/recipes/keeper/recipe.go"'},'package keeper\n\nimport (\n  "encoding/binary"\n\n  "github.com/cosmos/cosmos-sdk/store/prefix"\n  sdk "github.com/cosmos/cosmos-sdk/types"\n\n  "recipes/x/recipes/types"\n)\n\n// func (k Keeper) AppendRecipe() uint64 {\n//    count := k.GetRecipeCount()\n//    store.Set()\n//    k.SetRecipeCount()\n//    return count\n// }\n')),(0,i.kt)("p",null,"Add these prefixes to the ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes/x/recipes/types/keys.go")," file\nin the ",(0,i.kt)("inlineCode",{parentName:"p"},"const")," and add a comment for your reference:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/x/recipes/types/keys.go"',title:'"recipes/x/recipes/types/keys.go"'},'const (\n  //...\n\n  // Keep track of the index of recipes  \n  RecipeKey      = "Recipe-value-"\n  RecipeCountKey = "Recipe-count-"\n)\n')),(0,i.kt)("p",null,"Next, implement ",(0,i.kt)("inlineCode",{parentName:"p"},"GetRecipeCount")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes/x/recipes/keeper/recipe.go")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/x/recipes/keeper/recipe.go"',title:'"recipes/x/recipes/keeper/recipe.go"'},'func (k Keeper) GetRecipeCount(ctx sdk.Context) uint64 {\n  Get the store using storeKey (which is "recipes") and RecipeCountKey (which is "Recipe-count-")\n  store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.RecipeCountKey))\n  \n  // Convert the RecipeCountKey to bytes\n  byteKey := []byte(types.RecipeCountKey)\n  \n  // Get the value of the count\n  bz := store.Get(byteKey)\n  \n  // Return zero if the count value is not found (for example, it\'s the first recipe)\n  if bz == nil {\n    return 0\n  }\n  \n  // Convert the count into a uint64\n  return binary.BigEndian.Uint64(bz)\n}\n')),(0,i.kt)("p",null,"And then ",(0,i.kt)("inlineCode",{parentName:"p"},"SetRecipeCount"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/x/recipes/keeper/recipe.go"',title:'"recipes/x/recipes/keeper/recipe.go"'},'func (k Keeper) SetRecipeCount(ctx sdk.Context, count uint64) {\n  // Get the store using storeKey (which is "recipes") and RecipeCountKey (which is "Recipe-count-")\n  store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.RecipeCountKey))\n  \n  // Convert the RecipeCountKey to bytes\n  byteKey := []byte(types.RecipeCountKey)\n  \n  // Convert count from uint64 to string and get bytes\n  bz := make([]byte, 8)\n  binary.BigEndian.PutUint64(bz, count)\n  \n  // Set the value of Recipe-count- to count\n  store.Set(byteKey, bz)\n}\n')),(0,i.kt)("p",null,"Now you\u2019re ready to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppendRecipe")," function at\nthe top of the file above ",(0,i.kt)("inlineCode",{parentName:"p"},"GetRecipeCount")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SetRecipeCount"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/x/recipes/keeper/recipe.go"',title:'"recipes/x/recipes/keeper/recipe.go"'},"func (k Keeper) AppendRecipe (ctx sdk.Context, recipe types.Recipe) uint64 {\n  // Get the current number of recipes in the store\n  count := k.GetRecipeCount(ctx)\n  \n  // Assign an ID to the recipe based on the number of recipes in the store\n  recipe.Id = count\n  \n  // Get the store\n  store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.RecipeKey))\n  \n  // Convert the recipe ID into bytes\n  byteKey := make([]byte, 8)\n  binary.BigEndian.PutUint64(byteKey, recipe.Id)\n  \n  // Marshal the recipe into bytes\n  appendedValue := k.cdc.MustMarshal(&recipe)\n  \n  // Insert the recipe bytes using recipe ID as a key\n  store.Set(byteKey, appendedValue)\n  \n  // Update the recipe count\n  k.SetRecipeCount(ctx, count+1)\n  return count\n}\n")),(0,i.kt)("p",null,"Now you have implemented all the code required to create\nnew recipes and store them on-chain. When a transaction that\ncontains a message type ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgCreateRecipe")," is broadcast, the\nmessage is routed to the recipes module."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"k.CreateRecipe")," calls ",(0,i.kt)("inlineCode",{parentName:"li"},"AppendRecipe"),", which gets the recipe\ncount, adds a recipe using the count as the ID, increments the\ncount, and returns the ID")),(0,i.kt)("h2",{id:"\ufe0fquerying-recipes"},"\ud83c\udf7d\ufe0f\xa0Querying recipes"),(0,i.kt)("h3",{id:"-query-recipes"},"\ud83d\udda5 Query recipes"),(0,i.kt)("p",null,"In order to query your recipes, scaffold a query with Ignite:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ignite scaffold query dishes --response dish,ingredients\n")),(0,i.kt)("p",null,"A response on a successful scaffold will look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"modify proto/recipes/recipes/query.proto\nmodify x/recipes/client/cli/query.go\ncreate x/recipes/client/cli/query_dishes.go\ncreate x/recipes/keeper/query_dishes.go\n\n\ud83c\udf89 Created a query `dishes`.\n")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"proto/recipes/recipes/query.proto")," file import:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="proto/recipes/recipes/query.proto"',title:'"proto/recipes/recipes/query.proto"'},'import "recipes/recipes/recipe.proto";\n')),(0,i.kt)("p",null,"Add pagination to the recipe ",(0,i.kt)("em",{parentName:"p"},"request"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="proto/recipes/recipes/query.proto"',title:'"proto/recipes/recipes/query.proto"'},"message QueryDishesRequest {\n  // Adding pagination to request\n  cosmos.base.query.v1beta1.PageRequest pagination = 1;\n}\n")),(0,i.kt)("p",null,"Add pagination to the recipe ",(0,i.kt)("em",{parentName:"p"},"response"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="proto/recipes/recipes/query.proto"',title:'"proto/recipes/recipes/query.proto"'},"message QueryDishesResponse {\n  // Returning a list of recipes\n  repeated Recipe Recipe = 1;\n\n  // Adding pagination to response\n  cosmos.base.query.v1beta1.PageResponse pagination = 2;\n}\n")),(0,i.kt)("p",null,"In order to implement recipe querying logic in\n",(0,i.kt)("inlineCode",{parentName:"p"},"recipes/x/recipes/keeper/query_dishes.go"),",\ndelete the file contents and replace them with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/x/recipes/keeper/query_dishes.go"',title:'"recipes/x/recipes/keeper/query_dishes.go"'},'package keeper\n\nimport (\n  "context"\n  "github.com/cosmos/cosmos-sdk/store/prefix"\n  sdk "github.com/cosmos/cosmos-sdk/types"\n  "github.com/cosmos/cosmos-sdk/types/query"\n  "google.golang.org/grpc/codes"\n  "google.golang.org/grpc/status"\n\n  "recipes/x/recipes/types"\n)\n\nfunc (k Keeper) Dishes(c context.Context, req *types.QueryDishesRequest) (*types.QueryDishesResponse, error) {\n  // Throw an error if request is nil\n  if req == nil {\n    return nil, status.Error(codes.InvalidArgument, "invalid request")\n  }\n\n  // Define a variable that will store a list of recipes\n  var dishes []*types.Recipe\n\n  // Get context with the information about the environment\n  ctx := sdk.UnwrapSDKContext(c)\n\n  // Get the key-value module store using the store key (in our case store key is "chain")\n  store := ctx.KVStore(k.storeKey)\n\n  // Get the part of the store that keeps recipes (using recipe key, which is "Recipe-value-")\n  recipeStore := prefix.NewStore(store, []byte(types.RecipeKey))\n\n  // Paginate the recipes store based on PageRequest\n  pageRes, err := query.Paginate(recipeStore, req.Pagination, func(key []byte, value []byte) error {\n    var dish types.Recipe\n    if err := k.cdc.Unmarshal(value, &dish); err != nil {\n      return err\n    }\n\n    dishes = append(dishes, &dish)\n\n    return nil\n  })\n\n  // Throw an error if pagination failed\n  if err != nil {\n    return nil, status.Error(codes.Internal, err.Error())\n  }\n\n  // Return a struct containing a list of recipes and pagination info\n  return &types.QueryDishesResponse{Recipe: dishes, Pagination: pageRes}, nil\n}\n')),(0,i.kt)("h2",{id:"-running-the-recipes-rollup"},"\ud83d\udc69\u200d\ud83c\udf73 Running the recipes rollup"),(0,i.kt)("h3",{id:"-run-a-celestia-light-node"},"\u2728 Run a Celestia light node"),(0,i.kt)("p",null,"Follow instructions to install and start your Celestia Data Availalbility\nlayer Light Node selecting the network that you previously used. You can\nfind instructions to install and run the node ",(0,i.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/light-node"},"here"),"."),(0,i.kt)("p",null,"After you have Go and Ignite CLI installed, and your Celestia Light\nNode running on your machine, you're ready to build, test, and launch your own\nsovereign rollup."),(0,i.kt)("p",null,"Be sure you have initialized your node before trying to start it.\nWhen starting your node, remember to enable the gateway.\nYour start command should look similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"celestia light start --core.ip https://rpc-mocha.pops.one --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network mocha\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"light-node.png",src:n(2218).Z,width:"1912",height:"1514"})),(0,i.kt)("h3",{id:"\ufe0f-start-the-recipes-rollup"},"\ud83d\uddde\ufe0f Start the recipes rollup"),(0,i.kt)("p",null,"We have a handy ",(0,i.kt)("inlineCode",{parentName:"p"},"init.sh")," found in this repo\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rollkit/docs/tree/main/docs/scripts/recipes"},"here"),"."),(0,i.kt)("p",null,"We can copy it over to our directory with the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# From inside the `recipes` directory\nwget https://raw.githubusercontent.com/rollkit/docs/main/docs/scripts/recipes/init.sh\n")),(0,i.kt)("p",null,"This copies over our ",(0,i.kt)("inlineCode",{parentName:"p"},"init.sh")," script to initialize our\nRecipes Rollup."),(0,i.kt)("p",null,"You can view the contents of the script to see how we\ninitialize the Recipes Rollup."),(0,i.kt)("admonition",{title:"caution",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Before starting our rollup, we'll need to find\nand change ",(0,i.kt)("inlineCode",{parentName:"p"},"FlagDisableIAVLFastNode")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"FlagIAVLFastNode"),":"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/cmd/recipesd/cmd/root.go"',title:'"recipes/cmd/recipesd/cmd/root.go"'},"baseapp.SetIAVLFastNode(cast.ToBool(appOpts.Get(server.FlagIAVLFastNode))),\n")),(0,i.kt)("p",{parentName:"admonition"},"If you are on macOS, you will need to install md5sha1sum before starting your\nrollup:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew install md5sha1sum\n"))),(0,i.kt)("p",null,"\ud83d\udfe2 From your project working directory (",(0,i.kt)("inlineCode",{parentName:"p"},"recipes/"),"), start the chain with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bash init.sh\n")),(0,i.kt)("p",null,"With that, we have kickstarted our ",(0,i.kt)("inlineCode",{parentName:"p"},"recipesd")," network!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"recipe-start.gif",src:n(7257).Z,width:"1888",height:"1536"})),(0,i.kt)("p",null,"Open another teminal instance. Now, create your first\nrecipe in the command line by sending a transaction from ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes-key"),",\nwhen prompted, confirm the transaction by entering ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'recipesd tx recipes create-recipe salad "spinach, mandarin oranges, sliced almonds, smoked gouda, citrus vinagrette" --from recipes-key --keyring-backend test\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"recipes.gif",src:n(9018).Z,width:"1410",height:"1128"})),(0,i.kt)("h3",{id:"\ufe0fquery-your-recipes-with-the-cli"},"\u2328\ufe0f\xa0Query your recipes with the CLI"),(0,i.kt)("p",null,"To query all of the on-chain recipes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"recipesd q recipes dishes\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"query.gif",src:n(4862).Z,width:"1410",height:"1128"})),(0,i.kt)("p",null,"\ud83c\udf89\xa0Congratulations, again! You have now successfully built a recipe book rollup."))}d.isMDXComponent=!0},2218:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/light-node-e9bf84be9327c23a6573c247e5ede7cd.png"},4862:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/query-a6c8042342b2de67304f474de6c0df65.gif"},7257:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/recipe-start-b435769158f76024880099308cda4224.gif"},9018:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/recipes-ed8d74ded258a73a05555483e33b0c01.gif"}}]);