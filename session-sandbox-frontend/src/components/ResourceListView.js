import React, { useState, useEffect } from "react";
import ResourceCard from './ResourceCard';

const ResourceListView = () => {

  const[resources, setResources] = useState([]);

        useEffect(() => {
          fetch('/api/resources', {
             method: 'GET', headers: { 'Accept': 'application/json'},
          })
            .then(async response => {
                if (response.ok) {
                    let res = await response.json();
                    setResources(res);
                } else {
                    const text = await response.text();
                    return Promise
                        .reject(response.status + ' - ' + response.statusText + '  --  ' + text);
                }
            })
             .catch(error => {
                console.error(error);
             });
        },[])

  return (
    <>
      {resources.map((res, i) => (
            <ResourceCard key={'resourceCard' + i} resource={res}/>
      ))}
    </>
  );

}

export default ResourceListView;


/*
<Col md="3" key={'col' + i}>
            <ResourceCard key={'resourceCard' + i} resource={res}/>
        </Col>
*/