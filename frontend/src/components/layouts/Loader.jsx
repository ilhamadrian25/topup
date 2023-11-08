import React, { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

const Loader = () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        setProgress(100)
    }, [])

    return (
        <div>
        <LoadingBar
          color='#2f19f1'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
      </div>
    )
}

export default Loader