Nodes are stored contiguously in what can be considered a _flat_ array of nodes. This array can be accessed by fixed-size pages of nodes for better request efficiency.
All pages contains exactly `layer.nodePages.nodesPerPage` nodes, except for the last page (that may contain less).
We use an integer ID to map a node to its page as follow:
 ```
page_id         = floor( node_id / node_per_page)
node_id_in_page = modulo( node_id, node_per_page)
 ```

